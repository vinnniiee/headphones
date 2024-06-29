# Headphones

Headphones is an eCommerce website built using the MERN stack (MongoDB, Express, React, Node.js).

Deployed on - [Render](https://headphones-nzgi.onrender.com/)

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Scripts](#scripts)
- [Key Dependencies](#key-dependencies)
- [License](#license)

## Features

- **User Authentication and Authorization**: Secure user registration and login using JWT.
- **Product Management**: Users can browse products, while admins can add, update, and delete products.
- **Shopping Cart**: Users can add products to their cart, update quantities, and proceed to checkout.
- **Order Management**: Users can place orders and view order history, while admins can manage all orders.
- **Payment Integration**: Integrated with PayPal for secure online payments.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Admin Features**: Admins can manage users and products, ensuring smooth operation of the store.
- **Image Upload**: Images are uploaded and stored using an AWS S3 bucket.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/vinniiee/headphones.git
    cd headphones
    ```

2. Install server dependencies:
    ```bash
    npm install
    ```

3. Install client dependencies:
    ```bash
    cd client
    npm install
    cd ..
    ```

4. Create a `.env` file in the root directory of the project and add the following environment variables:
    ```
    MONGO_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    PAYPAL_CLIENT_ID=your_paypal_client_id
    ```

## Usage

### Development

1. Build and start the development server:
    ```bash
    npm start
    ```

2. Open your browser and navigate to `http://localhost:3000`.

### Production

1. Build the project:
    ```bash
    npm run build
    ```

2. Start the production server:
    ```bash
    npm run start:prod
    ```

## Scripts

- `start:dev:build`: Watch and compile TypeScript files for the server.
- `start:dev:server`: Start the development server with Nodemon.
- `start:dev:client`: Start the development client.
- `start`: Run all development scripts concurrently.
- `data:populate`: Populate the database with sample data.
- `data:erase`: Erase data from the database.
- `build:server`: Build the server.
- `build:client`: Build the client.
- `build`: Install dependencies and build both the server and client.
- `start:prod`: Start the production server.

## Key Dependencies

### Server

- **@aws-sdk/client-s3 & @aws-sdk/s3-request-presigner**: Used for managing file uploads to AWS S3.

### Client

- **@paypal/react-paypal-js**: For integrating PayPal payment gateway.
- **@reduxjs/toolkit**: For state management.
- **react-toastify**: For showing notifications.

## License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.
