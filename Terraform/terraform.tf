provider "azurerm" {
  features {}
}

# Resource Group
resource "azurerm_resource_group" "example" {
  name     = var.rg_name
  location = var.location
}


# Static Web App (React App)
resource "azurerm_static_site" "react_app" {
  name                     = var.static_web_app_name
  location                 = azurerm_resource_group.example.location
  resource_group_name      = azurerm_resource_group.example.name
  app_location             = "/" # Path to your React app build folder
  api_location             = ""          # If no backend API (e.g., if it's a purely static React app)
  branch                   = "main"
  repository_url           = var.repository_url
}

# App Service Plan (Linux)
resource "azurerm_app_service_plan" "node_app_service_plan" {
  name                = "node-app-service-plan"
  location            = azurerm_resource_group.example.location
  resource_group_name = azurerm_resource_group.example.name
  kind                = "Linux"
  reserved            = true # Required for Linux apps
  sku {
    tier = "Standard"
    size = "S1"
  }
}

# Node.js 20 LTS App Service
resource "azurerm_web_app" "node_app" {
  name                = var.node_app_name
  location            = azurerm_resource_group.example.location
  resource_group_name = azurerm_resource_group.example.name
  app_service_plan_id = azurerm_app_service_plan.node_app_service_plan.id
  app_settings = {
    "WEBSITE_NODE_DEFAULT_VERSION" = "20"
  }
}

# SQL Server
resource "azurerm_sql_server" "example_sql_server" {
  name                         = var.sql_server_name
  resource_group_name          = azurerm_resource_group.example.name
  location                     = azurerm_resource_group.example.location
  version                      = "12.0"
  administrator_login          = var.sql_admin_username
  administrator_login_password = var.sql_admin_password

  tags = {
    environment = "production"
  }
}

# SQL Database
resource "azurerm_sql_database" "stock_db" {
  name                = var.sql_database_name
  resource_group_name = azurerm_resource_group.example.name
  location            = azurerm_resource_group.example.location
  server_name         = azurerm_sql_server.example_sql_server.name
  sku_name            = "B_Gen5_1"
}

# Networking: Allow all networks to access the SQL server (for testing purposes, for production you should restrict access)
resource "azurerm_sql_firewall_rule" "allow_all_networks" {
  name                = "AllowAllNetworks"
  resource_group_name = azurerm_resource_group.example.name
  server_name         = azurerm_sql_server.example_sql_server.name
  start_ip_address    = var.start_ip_address
  end_ip_address      = var.end_ip_address
}
