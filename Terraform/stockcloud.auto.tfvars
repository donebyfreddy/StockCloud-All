# Resource Group
rg_name           = "StockCloud-APP-RG"
location          = "East US"

# Static Web App (React)
static_web_app_name = "StockCloud-APP"
repository_url      = "https://github.com/donebyfreddy/StockCloud-Frontend"

# Node.js App Service
node_app_name      = "backendstockcloud"

# SQL Server
sql_server_name    = "inventorycloud"
sql_admin_username = "sqladmin"
sql_admin_password = "Password1234!" # Make sure to update with a secure password

# SQL Database
sql_database_name  = "StockDB"

# Firewall Rule for SQL Server
start_ip_address   = "0.0.0.0"
end_ip_address     = "255.255.255.255"
