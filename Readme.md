# Project Management API

A full-stack project that allows users to create projects, assign members, and send messages within the projects. This API enables basic CRUD operations for projects and messages using **Node.js** and **MongoDB**. It also includes functionalities such as project creation, message sending, and retrieving project and message data.

---

## Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **Environment Variables**: `dotenv`
- **Other Libraries**: 
  - `cors`: Cross-Origin Resource Sharing middleware
  - `mongoose`: MongoDB object modeling
  - `dotenv`: Loads environment variables from `.env` file
  - `jsonwebtoken`: JWT authentication for secure routes
  - `bcryptjs`: Password hashing

---

## Features

- **Project Operations**:
  - Create a new project
  - Get all projects
  - Get a project by ID
  - Update a project
  - Delete a project

- **Message Operations**:
  - Send a message between users
  - Get all messages
  - Get messages by user

---

## Project Setup

### Prerequisites
Before you begin, ensure you have the following installed:

- **Node.js** (v14 or higher)
- **MongoDB** (locally or a MongoDB Atlas account for cloud-based database)

### Clone the Repository
git clone https://github.com/your-username/project-management-api.git
cd project-management-api

Install Dependencies
npm install


Set Up Environment Variables
PORT=5000
MONGODB_URI=mongodb://localhost:27017/project_management
JWT_SECRET=your_jwt_secret


PORT: Port number for the server to run (default: 5000)
MONGODB_URI: The connection string for your MongoDB database
JWT_SECRET: Secret key used for signing JWT tokens (can be anything)


Run the Project
To run the application locally, use the following command:
npm start
The server will be running at http://localhost:5000.


Postman API Operations
1. Create a New Project (POST Request)
URL: http://localhost:5000/api/projects

Method: POST
Request Body (JSON):
{
  "name": "Project 1",
  "description": "This is a test project",
  "members": ["60d6bcebe7f7fc8f31c5d557", "60d6bcf3e7f7fc8f31c5d558"]
}

2. Get All Projects (GET Request)
URL: http://localhost:5000/api/projects

Method: GET
Response: A list of all projects.


3. Get a Single Project by ID (GET Request)
URL: http://localhost:5000/api/projects/:id

Method: GET
Replace :id with the actual project ID.
Response: The project with the specified ID.


4. Update a Project (PUT Request)
URL: http://localhost:5000/api/projects/:id

Method: PUT
Request Body (JSON):

{
  "name": "Updated Project",
  "description": "Updated description of the project",
  "members": ["60d6bcebe7f7fc8f31c5d557"]
}

Replace :id with the project ID you want to update.


5. Delete a Project (DELETE Request)
URL: http://localhost:5000/api/projects/:id

Method: DELETE

Replace :id with the project ID you want to delete.

6. Create a New Message (POST Request)
URL: http://localhost:5000/api/messages

Method: POST

Request Body (JSON):
{
  "sender": "60d6bcebe7f7fc8f31c5d557",
  "receiver": "60d6bcf3e7f7fc8f31c5d558",
  "content": "This is a test message"
}


7. Get All Messages (GET Request)
URL: http://localhost:5000/api/messages

Method: GET

Response: A list of all messages.

8. Get Messages by User (GET Request)
URL: http://localhost:5000/api/messages/:userId

Method: GET

Replace :userId with the user ID whose messages you want to retrieve.

Response: All messages associated with the specified user.






