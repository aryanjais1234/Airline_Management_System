# Airline Management System (AMS)

## Overview

The Airline Management System (AMS) is a web application that enables an airline admin to manage carrier and flight information. The system includes features like adding, editing, and deleting carrier and flight details, as well as booking flights for customers.

The project is built using a mix of technologies including:

- **HTML/CSS/JavaScript** for the frontend
- **Java** for backend logic
- **JDBC** for database interaction
- **SQL** for data storage and management

## Features

### Admin Functionalities:

- **Login:** Admin can log in with a static username/password (`admin/admin`).
- **Carrier Management:**
  - Add new carriers
  - Edit or delete existing carrier details
- **Flight Management:**
  - Add new flights
  - Edit or delete existing flight details
- **View:** Admin can view all carriers and flights listed in two separate tables.

### Customer Functionalities:

- Book flights by selecting the available options.

## Technology Stack

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Java (Servlets)
- **Database:** MySQL (or any SQL-based DB)
- **Database Connection:** JDBC (Java Database Connectivity)

## Project Structure

- **HTML/JavaScript:** Handles the UI interaction such as adding carriers, flights, and customer bookings. The data is temporarily stored in local storage during development.
- **Java:** Backend logic handles CRUD operations (Create, Read, Update, Delete) for carriers and flights, along with user login functionality.
- **JDBC and SQL:** Java backend interacts with an SQL database using JDBC. SQL is used to store, update, and retrieve information about carriers, flights, and bookings.

## Setup Instructions

### Prerequisites:

1. **JDK:** Ensure you have Java Development Kit (JDK) installed.
2. **MySQL:** Set up a MySQL database.
3. **JDBC Driver:** Include MySQL JDBC driver in your project.

### Steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/airline-management-system.git
   ```
2. Set up your **SQL Database**:

   - Create a database for storing carrier and flight information.
   - Create tables for **Carriers** and **Flights** with the following structure:

     ```sql
     CREATE TABLE Carriers (
         carrier_id INT PRIMARY KEY AUTO_INCREMENT,
         carrier_name VARCHAR(50),
         discount_30_days DECIMAL(5, 2),
         discount_60_days DECIMAL(5, 2),
         discount_90_days DECIMAL(5, 2),
         bulk_booking DECIMAL(5, 2),
         silver_user DECIMAL(5, 2),
         gold_user DECIMAL(5, 2),
         platinum_user DECIMAL(5, 2)
     );

     CREATE TABLE Flights (
         flight_id INT PRIMARY KEY AUTO_INCREMENT,
         carrier_name VARCHAR(50),
         origin VARCHAR(50),
         destination VARCHAR(50),
         air_fare DECIMAL(10, 2),
         seat_capacity_business INT,
         seat_capacity_economy INT,
         seat_capacity_executive INT
     );
     ```

3. **Configure JDBC connection**:

   - In your Java code, update the JDBC connection settings:

   ```java
   String jdbcUrl = "jdbc:mysql://localhost:3306/your_database_name";
   String jdbcUsername = "your_username";
   String jdbcPassword = "your_password";
   ```

4. **Compile and Run**:

   - Use your favorite Java IDE (like IntelliJ or Eclipse) to compile and run the project.
   - Make sure the JDBC driver is added to the project dependencies.

5. **Frontend (Optional)**:
   - Run the HTML/JavaScript files on a simple HTTP server (for example, using Live Server in VSCode) to interact with the admin UI.

## How It Works

1. **Admin Login:**
   - A static login page is provided, where the admin uses `admin/admin` to log in and access the system.
2. **JDBC and SQL Integration:**

   - When the admin adds or edits carriers or flights, the information is saved in a MySQL database through JDBC.
   - Similarly, the booking and search functionality fetches the details from the database.

3. **Database Interaction:**
   - The Java backend uses JDBC to run SQL queries and fetch carrier and flight data.
   - CRUD operations (Create, Read, Update, Delete) are performed for carrier and flight details in the SQL database.
