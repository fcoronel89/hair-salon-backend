# Hair Salon Backend

## Proyect Description

Welcome to the Backend application for the Hair Salon web app – a dynamic platform designed to streamline the management of salon appointments. This project is the backbone of efficient shift handling and user interaction within the salon environment.

### Key Features

- Shift Management:

    - Sellers can effortlessly create and edit shifts, ensuring a smooth and organized schedule.
    - Hair Salon administrators have the ability to oversee and manage shifts, ensuring optimal utilization of resources.

- User Roles:

    - Seller: Empowered to manage shifts and maintain their professional profile with ease.
    - Hair Salon: In addition to profile management, can mark client attendance for appointments, enhancing the client experience.
    - Admin: Holds comprehensive control, managing all aspects, from creating professionals to editing user profiles.

## Demo

You can check the app here https://hair-salon-seven.vercel.app/login

## Getting Started

### Prerequisites

Before you begin, ensure you have the following prerequisites installed:

- Node.js: [Download Node.js](https://nodejs.org/)
- npm (Node Package Manager): [Download npm](https://www.npmjs.com/get-npm)

### Installation

For the Frontend App need to do this:

1. Clone the repository:

   ```bash
   git clone https://github.com/fcoronel89/hair-salon-backend

2. Navigate to the proyect directory:

    ```bash 
    cd hair-salon-backend

3. Install dependencies:

    ```bash
    npm install

4. Create '.env' file in the root folder and define this fields

    ```bash
    WHATSAPP_ACCESS_TOKEN: '' // Take from the meta developers page
    WHATSAPP_FROM_NUMBER_ID: '' // Take from the meta developers page
    WHATSAPP_BUSSINESS: '' // your whatsapp number business
    PORT: 3000 // change with your local port 
    GOOGLE_CLIENT_ID: '' // need to get from console cloud from google
    GOOGLE_SECRET: '' // need to get from console cloud from google
    COOKIE_KEY_1: 'key' // replace with your key 
    MONGO_URI: '' // replace with your DB string connection
    FRONTEND_URL: '' // replace with your url where is the frontend running
    API_URL: 'https://localhost:3000' // replace with the url where is running the backend

5. Start the development server:

    ```bash
    start:local

The proyect should now be running in http://localhost:yourport where yourport is wich you defined there

## Usage

You need to run boths apps, frontend and backend to use all the app. If you want to try only the BE you can use with postman too or try the login and logout with the examples pages.

For use the full web app:

You need to login with your Google account, then complete your profile and can start using the calendar depends of your user profile type what you can do.

You also can enter from your mobile, the app is full responsive.

## Backend Technologies

The backend of this Hair Salon web app is powered by a robust set of technologies and frameworks, ensuring efficient data processing and seamless communication with the frontend. Here's a detailed list:

- **Node.js:** A runtime environment that enables server-side JavaScript, providing a scalable and non-blocking I/O platform for the backend.

- **Express.js:** A fast and minimalist web framework for Node.js, used to build the API endpoints and handle HTTP requests and responses.

- **MongoDB:** A NoSQL database that stores data in a flexible, JSON-like format, chosen for its scalability and ease of integration with Node.js applications.

- **Mongoose:** An ODM (Object Data Modeling) library for MongoDB and Node.js, simplifying interactions with the MongoDB database.

- **Cors:** Middleware used to enable Cross-Origin Resource Sharing, ensuring secure communication between the frontend and backend.

- **Helmet:** A security middleware for Express, adding HTTP headers to enhance the security of the application.

- **dotenv:** A zero-dependency module for loading environment variables, ensuring a secure and flexible configuration.

- **Nodemon:** A utility that automatically restarts the Node.js server upon file changes during development, improving the development workflow.

- **PassportJS:** Integrated for Google authentication, providing a secure and straightforward way for users to authenticate using their Google accounts.

- **Express Session:** Used for session management, enabling the server to store and retrieve user data across requests, contributing to a seamless user experience.

- **Axios:** A popular HTTP client for making API requests, ensuring seamless communication between the backend and external services.

This backend technology stack was carefully selected to create a scalable, secure, and performant API that seamlessly supports the Hair Salon web app frontend.


## Contributing

I welcome contributions from the community to improve and enhance this portfolio. Whether you've found a bug, have a feature request, or want to contribute code feel free to do it.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Contact Information

Connect with me on [LinkedIn](https://www.linkedin.com/in/fcoronel89) for professional inquiries and networking.

Explore more of my projects on [GitHub](https://github.com/fcoronel89) and feel free to open issues or pull requests.
