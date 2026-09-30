# ==========================================================
# CLAIM ZERO AZURE — Container Apps (Consumption, scale to zero)
# Region: eastus
# No AKS / ACI / App Service / Log Analytics / VNet.
# Destroy at session end. Do not use the $200 credit.
# Copy terraform.tfvars.example to terraform.tfvars and fill in your values.
# ==========================================================

terraform {
  required_version = ">= 1.5.0"
  
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 4.0"
    }
  }
}

variable "subscription_id" {
  description = "Azure subscription GUID from 'az account show'"
  type        = string
}

variable "dockerhub_username" {
  description = "Docker Hub username that owns the public claim-zero repository"
  type        = string
}

provider "azurerm" {
  features {}
  subscription_id = var.subscription_id
}

locals {
  project    = "claime-zero"
  location   = "eastus"
  image_uri  = "${var.dockerhub_username}/claime-zero:latest"
}

resource "azurerm_resource_group" "claim" {
  name     = "rg-claim-zero"
  location = local.location

  tags = {
    Project = local.project
  }
}

resource "azurerm_container_app_environment" "claim" {
  name                = "${local.project}-env"
  location            = azurerm_resource_group.claim.location
  resource_group_name = azurerm_resource_group.claim.name

  tags = {
    Project = local.project
  }
}

resource "azurerm_container_app" "claim" {
  name                         = "${local.project}-app"
  container_app_environment_id = azurerm_container_app_environment.claim.id
  resource_group_name          = azurerm_resource_group.claim.name
  revision_mode                = "Single"

  template {
    min_replicas = 0
    max_replicas = 1

    container {
      name   = local.project
      image  = local.image_uri
      cpu    = 0.25
      memory = "0.5Gi"
    }
  }

  ingress {
    external_enabled = true
    target_port       = 80
    transport         = "auto"

    traffic_weight {
      percentage      = 100
      latest_revision = true
    }
  }

  tags = {
    Project = local.project
  }
}

output "app_url" {
  description = "Browser URL (HTTPS). First request may cold-start 30-60s because of scale-to-zero."
  value       = "https://${azurerm_container_app.claim.ingress[0].fqdn}"
}

output "container_app_name" {
  value = azurerm_container_app.claim.name
}

output "image_uri" {
  value = local.image_uri
}