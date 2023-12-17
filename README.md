MERN Stack Quiz Application
Overview
This project is a full-stack quiz application built with the MERN (MongoDB, Express.js, React.js, Node.js) stack. It allows users to take quizzes, view their scores, and manage quiz content through an admin interface.

Features
User authentication (Signup, Login, Logout)
Quiz-taking functionality with score tracking
Admin dashboard for managing quizzes and questions
Responsive design for optimal user experience on various devices
Technologies Used
Frontend:

React.js
Redux for state management
React Router for navigation
Axios for HTTP requests
Backend:

Node.js
Express.js
MongoDB for database storage
Mongoose as an ODM (Object Data Modeling) library
Authentication:

JSON Web Tokens (JWT) for secure authentication
Bcrypt for password hashing
Getting Started
Prerequisites
Node.js and npm installed
MongoDB database
### Installation
1. **Clone the repository:**
    ```bash
    git clone https://github.com/sohailahmed53/mern-quiz-app.git
    cd mern-quiz-app
    ```

2. **Install dependencies:**
    ```bash
    # Install server dependencies
    cd server
    npm install

    # Install client dependencies
    cd ../client
    npm install
    ```

3. **Set up environment variables:**
    - Create a `.env` file in the server directory and add necessary variables (e.g., PORT, MONGODB_URI, JWT_SECRET).

4. **Run the application:**
    ```bash
    # Run the server
    cd ../server
    npm start

    # Run the client
    cd ../client
    npm start
    ```

Open your browser and go to http://localhost:3000 to view the application.

Usage
Register for an account or log in if you already have one.
Navigate to the quizzes section to take quizzes.
Admins can manage quizzes and questions through the admin dashboard.
Contributing
Feel free to contribute to the project. Fork the repository, make your changes, and submit a pull request.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments
This project was inspired by myself MD SOHAIL AHMED
