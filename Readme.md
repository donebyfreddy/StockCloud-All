 
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
│   │       product_controller.js
│   │       user_controllers.js
│   │
│   ├───db
│   │       user_db.js
│   │
│   ├───middlewares
│   │       user_auth.js
│   │
│   ├───models
│   │       company_model.js
│   │       history_model.js
│   │       locations_models.js
│   │       product_model.js
│   │       user_model.js
│   │
│   ├───routes
│   │       analyticsRoutes.js
│   │       companyRoutes.js
│   │       historyRoutes.js
│   │       locationRoutes.js
│   │       productRoutes.js
│   │       user_routes.js
│   │
│   └───utils
│           user_utils.js
│
└───Frontend
    │   .env
    │   .eslintrc.cjs
    │   .gitignore
    │   index.html
    │   package-lock.json
    │   package.json
    │   postcss.config.js
    │   README.md
    │   tailwind.config.js
    │   vite.config.js
    │
    ├───public
    │       vite.svg
    │
    └───src
        │   App.jsx
        │   index.css
        │   main.jsx
        │   router.jsx
        │
        ├───assets
        │       admin-logo.svg
        │       authenticate.svg
        │       menu.svg
        │       react.svg
        │       undraw_empty_re.svg
        │       user-logo.svg
        │
        ├───components
        │       HeaderBar.jsx
        │       LoadingIndicator.jsx
        │       LogoutButton.jsx
        │       PopUpComponenet.jsx
        │       ShowErrorMessage.jsx
        │       ShowSuccessMesasge.jsx
        │       SideNavbar.jsx
        │       WarrantyExpiringProductsTableComponent.jsx
        │
        └───screens
            │   InventoryFormScreen.jsx
            │
            ├───brands
            │       BrandsScreen.jsx
            │       EditBrandsScreen.jsx
            │       NewBrandsScreen.jsx
            │
            ├───dashboard
            │   │   DashBoardLayout.jsx
            │   │   DashBoardScreen.jsx
            │   │
            │   └───components
            │           AnalyticsComponent.jsx
            │           PieChart.jsx
            │
            ├───locations
            │       EditLocationScreen.jsx
            │       LocationsScreen.jsx
            │       NewLocationScreen.jsx
            │
            ├───login
            │       AuthLayout.jsx
            │       LoginScreen.jsx
            │       SignupScreen.jsx
            │
            ├───product
            │       AddNewProductScreen.jsx
            │       ProductEditScreen.jsx
            │       ProductHistoryScreen.jsx
            │       ProductInfoScreen.jsx
            │       ProductsScreen.jsx
            │
            └───users
                │   UserManagementScreen.jsx
                │
                └───components
                        ChangeRolePopup.jsx
                        ManageUserTableRow.jsx
```

## Prerequisites

- Node.js
- npm or yarn
- MongoDB
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
