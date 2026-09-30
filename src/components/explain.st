// We run npm run build to make sure our files are ready for production.
http://localhost:5173/ => means that our project is running on our local machine
Dockerfile gives docker an instruction of what we are trying to create
push the image to docker hub so that azure can access it
docker tag => create a tag for an existing image and then claim-zero is my existing image
latest is the tag name
Docker is a software that allows us to create images
Package.json contains all the dependencies needed to run a react app

This is how you build a Docker image
====================================
* Run this command [Docker build -t claim-zero:latest .] => claim-zero name of the image
* Create a container out of this image [docker run -d -p 8080:80 --name claim-zero-container claim-zero:latest]
* Docker stop claim-zero-container [If you want to stop the container]
* Docker rm claim-zero-container [if you want to remove the container]

CLI Problem Solved
==================
* Visit https://github.com/codespaces
* Click New codespace
* Choose any repository
* Click Create codespace
* if it's not installed use [curl -sL https://aka.ms/InstallAzureCLIDeb | sudo bash]
* Verify az --version

Now we want our CLI to communicate with azure N.B we haven't pushed our image to docker hub
===========================================================================================
* use az login
* After the above command use this one [az provider register --namespace Microsoft.App --wait]
* it turns on container apps services for my subscription and allows me to run and create containers
* use this command to confirm registered [az provider show --namespace Microsoft.App --query registrationState -o tsv]

Docker hub
==========
* Create a Repo on Docker hub
* Sign in to docker hub on the terminal using [docker login]
* it should say login succeeded
* Tag your image and give it a new name before pushing it to the repo [docker tag claime-zero:latest sirtembekile/claime-zero:latest [left image name and right repo name]]
* Push your image [docker push sirtembekile/claime-zero:latest [image name]]

Terraform
=========
* Terraform is a technology that allows us to interact with the cloud e.g Azure
* Create a Terraform folder
* Inside the folder create a file called main.tf
* also create this file terraform.tfvars.example
* write this command cp terraform/terraform.tfvars.example terraform/terraform.tfvars
* the above command takes terraform tfvars.example and create a new one called [terraform.tfvars]
* we will use it to refer to the login details that we need
* we are now about to pull the image from our Docker Hub and create a container out of that image
* Go to the Terraform folder [cd terraform-azure]
* initialize terraform [terraform init]
* check what you are about to deploy to the cloud is valid using [terraform validate]
* Run terraform plan [this one is an overview or draft of what you about to deploy]
* run terraform apply to diploy these changes
* Now we want to destroy what we have created, we don't want to leave any services running on our cloud environment


Gcloud (GCP) (We Now Want Our CLI to communicate with our Google Account)
=========================================================================
* gcloud version
* gcloud auth login [We now want to Authenticate]
* We now want to authanticate terraform [gcloud auth application-default login]

Create a project and link billing (If its your first time)
==========================================================
* run gcloud projects list [lists your projects]
* run create this project [gcloud projects create claimes-zero-1 --name="Claim Zero"]
* Tell Google you want to work on this project [gcloud config set project claimes-zero-1]
* Get your account lists [gcloud billing accounts list] Get your Account ID
* run this command to connect your Google cloud project to your billing account so you can use paid services below command
*[gcloud billing projects link claimes-zero-0 --billing-account=ACCOUNT_ID]
* It should say billingEnabled: true
* Now Tell Google to work on this project [gcloud config set project claimes-zero-1]
* Set the qouta project to match [gcloud auth application-default set-quota-project claimes-zero-1]
* Enable all the APIs that we will use [gcloud services enable iam.googleapis.com cloudresourcemanager.googleapis.com serviceusage.googleapis.com]
* it should say finished successfully
* To delete your project you run [gcloud projects delete project-id]



In order for us to access AWS we need to create a user (IAM)
IAM is a platform that allows us to create users
IAM Users => this user will be able to access AWS CLoud from our terminal
IAM Users => Create a user => name it => claim-zero-participant => create user
=> Attach policies directly => search admin access and => powerUserAccess
Access key = username and password

Think of AWS as a build that has lots of rooms

Administrator Access: a master key that opens every room and lets you do everything e.g
managing people's access

powerUserAccess: can do almost everything except managing people's access

CLick security credentials => create access key => what this access key for =>
is for accessing command line interface (CLI) => Ignore the tag and create your access key

connect to AWS (On your VS Code Terminal)
=========================================
* say aws configure
* enter your access key ID
* enter your secret access key
* region name: us-east-1
* output format: json

Test if our connection was successful
=====================================
*aws sts get-caller-identity
*You'll shall get your user ID and Account ID
*672417491429* [Account ID]

ECR (Elastic Container Registry) Repository
===========================================
* ECR is a service of AWS that Allows you to create Repositories and store your docker images
* Use this command below to create your repo
[aws ecr create-repository --repository-name claime-zero --region us-east-1]

Authenticate Docker to AWS (We now want Docker to be able to Connect to AWS)
============================================================================
* use this command below
[aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 672417491429.dkr.ecr.us-east-1.amazonaws.com]
* it should say login succeeded
* Tag your image and give it a new name [below]
[docker tag claime-zero:latest 672417491429.dkr.ecr.us-east-1.amazonaws.com/claime-zero:latest]
* Now push your Docker image to AWS using the code below:
[docker push 672417491429.dkr.ecr.us-east-1.amazonaws.com/claime-zero:latest]


Create Terraform / main.tf
==========================
* Benefits Automation
*Terraform is the one that tells ECS where our image is stored in the ECR Repo
* Then ECS is the one that is going to pull that image from that ECR folder and run it as a container 
* Terraform is a technology that allows us to interact with the cloud on a terminal (e.g Azure etc)
* Create a terraform folder
* and a file called [main.tf]
* Before pushing the terraform code to the cloud, you need to cd terraform
* initialize Terraform (terraform init)
* Before you deploy, check what you are deploying is valid (by using terraform validate)
* It should say "The configuration is valid"
* Now we need to test exactly what we are deploying to the cloud (terraform plan)
* terraform plan is like a draft of what we are putting on the cloud
* run terraform apply to deploy these things onto the cloud
* After go to ECS (Elastic Container Service)

Pipeline (Helps us automate changes)(buildspec.yml)
===================================================
* If something triggers codebuild e.g new commit pushed to your github
* it will automatically pull your latest code:
* Build a fresh docker image
* Log in to ECR 
* Tag and push you new Docker image
* ECS Pulls your new docker image from ECR and run it as a container, replacing the old one