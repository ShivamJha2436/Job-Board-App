# Job Board Web Application

This is a job board web application built with Next.js, AuthKit, Tailwind CSS, and MongoDB. It allows users to find and post jobs with a modern and user-friendly interface.

![Job Board](./images/job-board.png)

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Screenshots](#screenshots)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication and authorization
- Post job listings
- Browse and search for job listings
- Responsive design

## Tech Stack

- **Frontend:** Next.js, Tailwind CSS
- **Authentication:** AuthKit
- **Backend:** Node.js, Express.js, MongoDB
- **Database:** MongoDB

## Screenshots
### SignIn/LogIn
![Screenshot (485)](https://github.com/user-attachments/assets/473bb9d5-7e78-49a4-8065-98734123bb7f)

### Home Page
[Screenshot 2024-06-28 102917](https://github.com/user-attachments/assets/b5de28bb-f61d-497f-beac-40d44feb5010)

### Job Listings
[Screenshot (484)](https://github.com/user-attachments/assets/93475e08-8fff-4e3a-a11e-e2d2a4f3c7d1)


### Job Details
[Screenshot (486)](https://github.com/user-attachments/assets/047fb14b-cf7c-4524-818b-d8717324caab)


## Installation

1. Clone the repository
    ```sh
    git clone https://github.com/your-username/job-board.git
    cd job-board
    ```

2. Install dependencies
    ```sh
    npm install
    ```

3. Set up environment variables

    Create a `.env.local` file in the root directory and add the following environment variables:
    ```sh
    MONGODB_URI=your_mongodb_connection_string
    NEXTAUTH_URL=http://localhost:3000
    NEXT_PUBLIC_AUTHKIT_SECRET=your_authkit_secret
    ```

4. Start the development server
    ```sh
    npm run dev
    ```

5. Open your browser and navigate to `http://localhost:3000`

## Usage

- **Sign Up:** Create a new account using the sign-up form.
- **Log In:** Log in using your credentials.
- **Post a Job:** Navigate to the "Post a Job" page and fill out the form to create a new job listing.
- **Browse Jobs:** Explore the job listings on the home page.
- **Job Details:** Click on a job listing to view more details.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature-name`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some feature'`)
5. Push to the branch (`git push origin feature/your-feature-name`)
6. Open a pull request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
