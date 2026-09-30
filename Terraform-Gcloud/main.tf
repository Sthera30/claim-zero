# ============================================================
# CLAIM ZERO GCP – Cloud Run (request-based, scale to zero)
# Region: us-central1
# No GKE / GCE / Load Balancer / Artifact Registry / Cloud Build / VPC.
# Destroy at session end. Do not spend the $300 Welcome credit.
# Copy terraform.tfvars.example to terraform.tfvars and fill in your values.
# ============================================================

terraform {
  required_version = ">= 1.5.0"

  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "~> 6.0"
    }
  }
}

variable "project_id" {
  description = "GCP project ID from `gcloud config get-value project`"
  type        = string
}

variable "dockerhub_username" {
  description = "Docker Hub username that owns the public claim-zero repository"
  type        = string
}

provider "google" {
  project = var.project_id
  region  = "us-central1"
}

locals {
  project   = "claim-zero"
  location  = "us-central1"
  image_uri = "${var.dockerhub_username}/claim-zero:latest"
}

# Enable Cloud Run API (no compute charge). Leave enabled on destroy to avoid re-enable...
resource "google_project_service" "run" {
  project            = var.project_id
  service            = "run.googleapis.com"
  disable_on_destroy = false
}

# Serverless container: nginx on port 80, public HTTPS, scale to zero when idle.
# cpu_idle = true → request-based billing (Always Free grant), not CPU always a...
# invoker_iam_disabled = true → public URL without allUsers IAM (blocked by Dom...)
resource "google_cloud_run_v2_service" "claim" {
  name     = local.project
  location = local.location
  ingress  = "INGRESS_TRAFFIC_ALL"

  invoker_iam_disabled = true
  deletion_protection  = false

  template {
    scaling {
      min_instance_count = 0
      max_instance_count = 1
    }

        containers {
      name  = local.project
      image = local.image_uri

      ports {
        container_port = 80
      }

      resources {
        limits = {
          cpu    = "1"
          memory = "512Mi"
        }
        cpu_idle = true
      }
    }
  }

  depends_on = [google_project_service.run]
}

output "app_url" {
  description = "Browser URL (HTTPS). First request may cold-start 30-60s becau..."
  value       = google_cloud_run_v2_service.claim.uri
}

output "service_name" {
  value = google_cloud_run_v2_service.claim.name
}

output "image_uri" {
  value = local.image_uri
}