# TradeFlow FullStack

A modern full-stack stock trading platform built using React, Spring Boot, and MySQL with secure authentication and interactive dashboards.

---

# Features

* Secure Login Authentication
* Session-Based Authentication using Spring Security
* Modern Animated UI
* Responsive Design
* Charts & Analytics
* Dashboard Interface
* Buy & Sell Orders
* REST API Integration
* Axios API Calls
* CORS Configuration
* Multi-Frontend Architecture
* Full Stack Application Structure

---

# Tech Stack

## Frontend

* React.js
* CSS3
* Axios
* React Router DOM

## Backend

* Spring Boot
* Spring Security
* Java
* REST APIs

## Database

* MySQL

---

# Project Structure

```bash
TradeFlow-FullStack
│
├── Backend
│   └── backend
│
├── frontend
│
├── dashboard
│
└── README.md
```

---

# Authentication Flow

1. User enters username and password (Username: user, Password: 1234)
2. React frontend sends login request
3. Spring Security validates credentials
4. Session cookie is generated
5. User redirected to dashboard

---

# CORS Support

The backend supports multiple frontend applications running on:

```bash
http://localhost:3000
http://localhost:3001
```

---

# Installation

## Clone Repository

```bash
git clone https://github.com/KarthikChirukuri/TradeFlow-FullStack
```

---

# Frontend Setup

```bash
cd frontend
npm install
npm start
```

---

# Dashboard Setup

```bash
cd dashboard
npm install
npm start
```

---

# Backend Setup

```bash
cd Backend/backend
mvn spring-boot:run
```

---

# Future Improvements

* JWT Authentication
* Real-Time Stock Data
* Portfolio Management
* Dark/Light Theme
* Docker Deployment
* Cloud Hosting

---

# Author

Karthik Chirukuri

* Full Stack Developer
* Java & Spring Boot Developer
* Backend Developer
* React Developer

---

# License

This project is developed for learning and portfolio purposes.
