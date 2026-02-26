# EduNolan (edunolan-client)

Welcome to the EduNolan project!

## Project Description

EduNolan is a full-stack web application with a React-based frontend client, and a Flask-based backend API that also serves the compiled frontend.

### Frontend
The frontend is built with **React** (Create React App), styled with **Tailwind CSS**. It provides an interactive client application (`edunolan-client`).

### Backend
The backend is a lightweight **Flask (Python)** server. It provides API endpoints (e.g., `/api/test`) and acts as a web server to serve the built static production files of the React frontend from the `build` directory.

## Project Structure

This repository is organized into two main directories:

- **Frontend Setup**: Contains the React application (`edunolan-client`).
  - To install dependencies: `npm install`
  - To run in development: `npm start`
  - To build for production: `npm run build`
  
- **Backend Setup**: Contains the Flask application.
  - Setup virtual environment and install dependencies: `pip install -r requirements.txt`
  - To run the server: `python app.py` (The server runs on port 5000 by default and serves the frontend build).

## Getting Started

1. Navigate to the `Frontend Setup` directory and run `npm install` followed by `npm run build`.
2. Navigate to the `Backend Setup` directory, install the python requirements, and start the python server `python app.py`.
3. Open `http://localhost:5000` in your browser.

## Features

- **Interactive UI**: A responsive and modern user interface built with React.
- **Dynamic Content**: Seamless user experience with client-side routing and state management.
- **Full-Stack Integration**: Integrated Python Flask application serving both the API and the compiled frontend assets.
- *(Add more specific features here as the project grows)*

## Tech Stack

### Frontend
- **React.js**: Front-end library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **React Router Dom**: For handling routing within the application.
- **FontAwesome / React Icons**: For interactive icons and UI elements.

### Backend
- **Python / Flask**: Lightweight WSGI web application framework.
- **Flask-CORS**: For handling Cross-Origin Resource Sharing (CORS).
- **Node.js & Express** *(optional/experimental server in `server/` directory)*: For handling future scalability using MongoDB via Mongoose.

## API Routes Explanation

The backend operates mainly out of `app.py` functioning both as an API provider and a static file server:

- **`GET /api/test`**: 
  - **Description**: A simple test endpoint to verify the Flask backend API is up and running.
  - **Response**: Returns a JSON object `{"status": "success", "message": "API is working!"}`.

- **`GET /<path:path>`** & **`GET /`**:
  - **Description**: Catches all routing. If the requested path is not an API route (`/api/*`), it will attempt to serve the corresponding static file from the React `build` directory. If the file doesn't exist, it serves `index.html` to allow React Router to handle the route rendering on the client side.

## Screenshots

*(Add your application screenshots here)*

![App Screenshot 1](placeholder-url-for-screenshot1.png)
> *Caption for Screenshot 1*

![App Screenshot 2](placeholder-url-for-screenshot2.png)
> *Caption for Screenshot 2*
