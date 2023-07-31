# Notate

Notate is a note-taking web application built with React and Node.js. It is currently in the development stage and aims to provide users with a simple and intuitive platform for managing their notes.

## Features
- Create new notes with a title and content.
- Edit and update existing notes.
- Delete notes that are no longer needed.
- Organize notes into categories or tags.
- Search functionality to quickly find specific notes.
- Responsive design, ensuring a seamless experience across different devices.

## Installation

1. Fork the repository by clicking the "Fork" button on the GitHub repository page.

2. Clone the forked repository to your local machine:

   ```bash
   git clone https://github.com/YourUsername/notate.git
   ```

### Server

1. Navigate to the server directory:

   ```bash
   cd notate/server
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Set up the following environment variables in the server:

   - `NODE_ENV`: When hosting use **`production`**, else use **`development`**.
   - `CLIENT_URL`: The URL where the client application is hosted.
   - `MONGODB_URL`: The connection URL for your MongoDB database.
   - `SESSION_SECRET`: A secret key used to encrypt session data.
   - `GOOGLE_CLIENT_ID`: Your Google client ID for Google OAuth.
   - `GOOGLE_CLIENT_SECRET`: Your Google client secret for Google OAuth.
   - `FACEBOOK_APP_ID`: Your Facebook app ID for Facebook OAuth.
   - `FACEBOOK_APP_SECRET`: Your Facebook app secret for Facebook OAuth.

4. Start the server:

   ```bash
   npm start
   ```

   The server will start running on [http://localhost:4000](http://localhost:4000).

### Client

1. Navigate to the client directory:

   ```bash
   cd notate/client
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Set up the following environment variable in the client:

   - `REACT_APP_SERVER_URL`: The URL of the backend server.

4. Start the development server:

   ```bash
   npm start
   ```

   The client application will open in your preferred web browser at [http://localhost:3000](http://localhost:3000).

## Technologies Used

- React: JavaScript library for building the user interface.
- Node.js: JavaScript runtime environment for the backend.
- Express: Web framework for Node.js.
- MongoDB: NoSQL database for storing the notes.
- RESTful API: Backend API design for communication between the frontend and backend.

## Contributing

Contributions are welcome! As the project is in the early development stage, there are several areas where you can contribute:

- Refactoring and improving existing code.
- Adding new features and functionalities.
- Fixing bugs and issues.

If you have any ideas or suggestions, please feel free to open an issue or reach out through the contact information provided in the repository.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
