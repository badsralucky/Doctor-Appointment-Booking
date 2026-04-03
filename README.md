This section provides the essential documentation for setting up and running the full-stack Doctor Appointment Booking application. Built with the MERN stack and styled with Tailwind CSS, this project leverages Vite for a fast frontend development experience.

🛠️ Environment Configuration
Before launching the application, you must configure your environment variables to establish a connection with your database and secure your authentication system.

Navigate to the backend directory.

Create a file named .env.

Add the following variables:

Code snippet
# MongoDB Connection String
MONGO_URI=your_mongodb_connection_url_here

# JSON Web Token Secret
JWT_SECRET=your_super_secret_key_here
Note: Ensure you replace the placeholder values with your actual MongoDB Atlas connection string and a strong, unique string for your JWT secret.

🚀 Getting Started
Follow these steps to get the development environment up and running on your local machine.

1. Backend Setup
The backend handles the API logic, database schemas, and authentication.

Open your terminal and navigate to the backend folder:
cd backend

Install dependencies:
npm install

Start the server:
npm start

2. Frontend Setup
The frontend provides the user interface for patients and doctors, powered by React and Vite.

Open a new terminal window and navigate to the frontend folder:
cd frontend

Install dependencies:
npm install

Start the development server:
npm run dev
