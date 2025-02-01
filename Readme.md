 
# StockCloud - Inventory Management System hosted in Azure

An Inventory Management System built with Vite, React for the frontend, and Node.js, Express, and SQL Server for the backend.

NOT Finished, still working on it. Next upcoming project!!!

## Table of Contents

- [Features](#features)
- [Folder Structure](#folder-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication and authorization
- Manage products, companies, locations, and brands
- Track product history
- Dashboard with analytics
- Responsive design with Tailwind CSS

## Folder Structure

```plaintext
C:.
├───Backend
│   │   .env
│   │   .gitignore
│   │   app.js
│   │   config.npmrc
│   │   package-lock.json
│   │   package.json
│   │   README.md
│   │
│   ├───controllers
│   │       assetmanag_controller.js
│   │       device_controller.js
│   │       location_controller.js
│   │       product_controller.js
│   │       storage_controller.js
│   │       user_controller.js
│   │   
│   ├───middlewares
│   │       user_db.js
│   │       user_auth.js
│   │       user_utils.js
│   │
│   ├───models
│   │   ├───assetmanagement
│   │   │       asset_model.js
│   │   │       storage_model.js
│   │   ├───device_model.js
│   │   ├───location_model.js
│   │   ├───product_model.js
│   │   ├───user_model.js
│   │
│   ├───routes
│   │       analyticsRoutes.js
│   │       assetManagementRoutes.js
│   │       deviceRoutes.js
│   │       locationRoutes.js
│   │       productRoutes.js
│   │       storageRoutes.js
│   │       userRoutes.js
│   │

```

## Prerequisites

- Node.js
- npm or yarn
- SQL Server
- 

## ENV

### Backend
DB_HOST
DB_USERNAME
DB_PASSWORD
DB_NAME
DB_PORT

ORIGIN=http://localhost:3000
PORT=3000
NODE_ENV=Development or Production
SECRET_KEY=JWT_SECRET


### Frontend

VITE_MODE=DEV
VITE_LOCAL=http://localhost:3000

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```

2. **Backend Setup:**
   ```bash
   cd Backend
   npm install
   ```

3. **Frontend Setup:**
   ```bash
   cd ../Frontend
   npm install
   ```

## Running the Application

1. **I have enabled that with 1 command you can execute both Backend and Frontend with Concurrently:**
   ```bash
   npm start
   ```

   ```


## API Endpoints

### User Routes

- **POST** `/api/v1/users/signup` - Sign up a new user
- **POST** `/api/v1/users/login` - Log in a user
- **GET** `/api/v1/users/logout` - Log out a user

### Product Routes

- **GET** `/api/v1/products` - Get all products
- **POST** `/api/v1/products` - Add a new product
- **PUT** `/api/v1/products/:id` - Update a product
- **DELETE** `/api/v1/products/:id` - Delete a product

### History Routes

- **GET** `/api/v1/history/:productId` - Get product history

### Company Routes

- **GET** `/api/v1/companies` - Get all companies
- **POST** `/api/v1/companies` - Add a new company

### Location Routes

- **GET** `/api/v1/locations` - Get all locations
- **POST** `/api/v1/locations` - Add a new location

### Analytics Routes

- **GET** `/api/v1/analytics` - Get analytics data

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
