# Resource Group variables
variable "rg_name" {
  description = "Name of the resource group"
  type        = string
  default     = "rg-example"
}

variable "location" {
  description = "Azure region where resources will be created"
  type        = string
  default     = "East US"
}

# Static Web App (React) variables
variable "static_web_app_name" {
  description = "Name of the static web app"
  type        = string
  default     = "react-static-app-example"
}

variable "repository_url" {
  description = "URL of the GitHub repository for the static web app"
  type        = string
  default     = "https://github.com/yourusername/yourrepo"
}

# Node.js App Service variables
variable "node_app_name" {
  description = "Name of the Node.js web app"
  type        = string
  default     = "node-app-example"
}

# SQL Server variables
variable "sql_server_name" {
  description = "Name of the SQL server"
  type        = string
  default     = "sqlserverexample"
}

variable "sql_admin_username" {
  description = "Admin username for SQL Server"
  type        = string
  default     = "sqladmin"
}

variable "sql_admin_password" {
  description = "Admin password for SQL Server"
  type        = string
  sensitive   = true
}

# SQL Database variables
variable "sql_database_name" {
  description = "Name of the SQL database"
  type        = string
  default     = "StockDB"
}

# Firewall rule for SQL Server
variable "start_ip_address" {
  description = "Starting IP address for SQL firewall rule"
  type        = string
  default     = "0.0.0.0"
}

variable "end_ip_address" {
  description = "Ending IP address for SQL firewall rule"
  type        = string
  default     = "255.255.255.255"
}
