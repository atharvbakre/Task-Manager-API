# Task-Manager-API

[Task Manager API](shadow-task-manager.herokuapp.com)
Used to store and fetch Users tasks and their status.

Using Node.js, Express.js, Mongoose ODM, MongoDB.

To run:
1. Install Node modules using: **npm install**
2. Run using the dev script: **npm run dev**
   
Use Postman to execute the requests.   

## Users
   
**Create User**
POST request '/users'
  Body containing name, email and password as they are required fields, and age as an optional field.
  A welcome mail would be sent to the email id mentioned.
  
**User Login**
POST request '/users/login'
  Body containing email and password.
  
**User Avatar**
POST request '/users/me/avatar'
  Body containing form-data with key=value pair avatar=FILE_NAME.
  
**User Logout**
POST request '/users/logout'
  Logout from current session.
  Authentication is required i.e. must be logged in.
  
**User Logout All**
POST request '/users/logoutAll'
  Logout from all active sessions.
  Authentication is required i.e. must be logged in.
  
**User Profile**
GET request '/users/me'

**User Avatar**
GET request '/users/:id/avatar'
  Get avatar by user id.
  
**Update User Profile**
PATCH request '/users/me'
  Body containing valid fields to update.
  
**Delete User Avatar**
DELETE request '/users/me/avatar'
  Authentication required i.e. must be logged in.
  
**Delete User**
DELETE request '/users/me'
  Authentication required i.e. must be logged in.
  A mail regarding closing would be sent to mentioned email id.
  
## Tasks

**Create Task**
POST request '/tasks'
  Body containing description and completed, completed is optional by default false.

**Get Task by ID**
GET request '/tasks/:id'
  Get Task by the parameter passed as id.
  
**Get Tasks**
GET request '/tasks'
  Get all the tasks.
  Furthermore filter, and limit could be added by passing them as query.
  
**Update Task**
PATCH request '/tasks/:id'
  Body containing valid fields to update.
  Update task using id.
  
**Delete Task**
DELETE request 'tasks/:id'
  Delete task using id.
