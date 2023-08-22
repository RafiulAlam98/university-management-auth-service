# University Management Backend

### Live URL: https://university-management-mu.vercel.app/api/v1
### GitHub Repository: https://github.com/RafiulAlam98/university-management

## Table of Contents

- [Description](#description)
- [Features](#features)
- - [Student Management](#student-management)
  - [Admin Management](#admin-management)
  - [Faculty Management](#faculty-management)
  - [Semester System](#semester-system)
  - [Course Management](#course-management)
  - [Enrollment System](#enrollment-system)
  - [Authentication & Authorization](#authentication--authorization)
  - [Error Handling](#error-handling)
  - [Database Integration](#database-integration)
- [Technology Stack](#technology-stack)
- [API Endpoints](#api-endpoints)

## Description

This repository contains the backend code for the University Management System, developed using Node.js. The backend serves as the core engine for managing various aspects of university operations, such as student information, courses, enrollment, and more.

## Features

### Student Management

Manage student records, including personal information, academic history, and enrollment status.

### Admin Management

Manage admin users responsible for overseeing various administrative tasks within the university system.

### Faculty Management

Maintain a database of faculty members, including their personal information, courses taught, and academic expertise.

### Semester System

Implement a semester-based academic structure, enabling the management of course schedules, student enrollment, and grading.

### Enrollment System

Enable students to enroll in courses and manage their course load.

### Authentication & Authorization

Secure endpoints with authentication mechanisms and role-based authorization.

### Error Handling

Implement robust error handling to provide meaningful responses to various scenarios.


### Database Integration

Utilize a database (e.g., MongoDB) for persistent storage of university data.

## Prerequisites

Before getting started, ensure you have the following:

- Node.js (version x.x.x)
- MongoDB (or another supported database)
- npm (Node Package Manager)


## Technology Stack

The University Management Backend is built using the following technologies:

- **Node.js**: JavaScript runtime environment for server-side development.
- **Express.js**: Web application framework for building APIs and handling routes.
- **MongoDB**: NoSQL database for storing university data.
- **Mongoose**: Object Data Modeling (ODM) library for MongoDB integration.
- **JSON Web Tokens (JWT)**: For authentication and authorization.
- **Bcrypt**: Library for hashing passwords.
- **dotenv**: For managing environment variables.
- **... (add any other technologies you're using)**


## API Endpoints

The following API endpoints are available for interacting with the University Management Backend:


  
### Student

- `GET /students`: Get a list of all student users.
- `GET /students/:id`: Get details of a specific student user.
- `POST /users/create-student`: Create a new student user.
- `PUT /students/:id`: Update details of a specific student user.
- `DELETE /students/:id`: Delete a specific student user.

### Faculty

- `GET /academic-faculty`: Get a list of all faculty members.
- `GET /academic-faculty/:id`: Get details of a specific faculty member.
- `POST /academic-faculty/create-faculty`: Create a new faculty member.
- `PUT /academic-faculty/:id`: Update details of a specific faculty member.
- `DELETE /academic-faculty/:id`: Delete a specific faculty member.

### Semesters

- `GET /academic-semesters`: Get a list of all semesters.
- `GET /academic-semesters/:id`: Get details of a specific semester.
- `POST /academic-semesters/create-semester`: Create a new semester.
- `PATCH /academic-semesters/:id`: Update details of a specific semester.
- `DELETE /academic-semesters/:id`: Delete a specific semester.
  
### Department

- `GET /academic-department`: Get a list of all department.
- `GET /academic-department/:id`: Get details of a specific department.
- `POST /academic-department/create-department`: Create a new department.
- `PATCH /academic-department/:id`: Update details of a specific department.
- `DELETE /academic-department/:id`: Delete a specific department.

### Admins

- `GET /admins`: Get a list of all admin users.
- `GET /admins/:id`: Get details of a specific admin user.
- `POST /users/create-admin`: Create a new admin user.
- `PUT /admins/:id`: Update details of a specific admin user.
- `DELETE /admins/:id`: Delete a specific admin user.

### Authentication Login or Refresh Token

- `POST /auth/login`: Make Login.
- `POST /auth/refresh-token`: Create a refresh-token.

For detailed information about request payloads, response formats, and additional parameters, refer to the API documentation.

