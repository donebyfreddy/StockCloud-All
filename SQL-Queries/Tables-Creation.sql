CREATE TABLE Devices (
    id INT IDENTITY(1,1) PRIMARY KEY,  
    serial_number NVARCHAR(255) NOT NULL,
    type NVARCHAR(255) NOT NULL,          
    manufacturer NVARCHAR(255) NOT NULL,   
    model NVARCHAR(255) NOT NULL,         
    location INT NOT NULL,                
    status NVARCHAR(50),               
    purchase_date DATE,               -- Use DATE instead of DATETIME
    warranty_date DATE,               -- Use DATE instead of DATETIME
    description NVARCHAR(3000),                  
    details NVARCHAR(MAX),                
    createdAt DATETIME DEFAULT GETDATE(),  -- Automatically set to current date and time when a record is created
    updatedAt DATETIME DEFAULT GETDATE(),  -- Automatically set to current date and time when a record is created
    CONSTRAINT FK_Location FOREIGN KEY (location) REFERENCES Locations(id)
);


SELECT * FROM DEVICES

INSERT INTO Devices (serial_number, type, manufacturer, model, location, status, purchase_date, warranty_date, description, details) 
VALUES ('SN12345', 'Laptop', 'Dell', 'XPS 13', 1, 'Available', '2025-01-01', '2028-01-01', 'High-performance laptop', '{"ram": "16GB", "processor": "Intel i7"}');


CREATE TABLE Storages (
    id INT IDENTITY(1,1) PRIMARY KEY,  -- Auto-incrementing ID field
    name NVARCHAR(255) NOT NULL,        -- Storage name (assuming max length of 255 characters)
    location INT NOT NULL,              -- Foreign key to Location table
    description NVARCHAR(255),          -- Storage description (optional)
    status NVARCHAR(20) DEFAULT 'OK',   -- Storage status, default value 'OK'


	CONSTRAINT FK_storages_location FOREIGN KEY (location) REFERENCES Locations(id)
);


CREATE TABLE Users (
    id INT IDENTITY(1,1) PRIMARY KEY,
    name NVARCHAR(255) NOT NULL,
    email NVARCHAR(255) NOT NULL UNIQUE,
    password NVARCHAR(255) NOT NULL,
    number NVARCHAR(50),
    role NVARCHAR(50) DEFAULT 'user',
    department NVARCHAR(255),
    location NVARCHAR(255),
    image NVARCHAR(255) DEFAULT '../../Frontend/src/assets/user-logo.webp',
    status NVARCHAR(50) DEFAULT 'Active',
    createdAt DATETIME DEFAULT GETDATE(),
    updatedAt DATETIME DEFAULT GETDATE()
);



CREATE TABLE Using_Users (
    id INT IDENTITY(1,1) NOT NULL,
    user_id INT NOT NULL,
    device_id INT NOT NULL,
    createdAt DATETIME NOT NULL DEFAULT GETDATE(),
    updatedAt DATETIME NOT NULL DEFAULT GETDATE(),
    PRIMARY KEY (id),
    CONSTRAINT FK_Using_Users_User FOREIGN KEY (user_id) REFERENCES Users (id),
    CONSTRAINT FK_Using_Users_Device FOREIGN KEY (device_id) REFERENCES Devices (id)
);

CREATE TABLE Using_Storages (
    id INT IDENTITY(1,1) NOT NULL,
    storage_id INT NOT NULL,
    device_id INT NOT NULL,
    createdAt DATETIME NOT NULL DEFAULT GETDATE(),
    updatedAt DATETIME NOT NULL DEFAULT GETDATE(),
    PRIMARY KEY (id),
    CONSTRAINT FK_Using_Storages_Storage FOREIGN KEY (storage_id) REFERENCES Storages (id),
    CONSTRAINT FK_Using_Storages_Device FOREIGN KEY (device_id) REFERENCES Devices (id)
);



