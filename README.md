# Blog Website with Next.js

## Introduction
This is a blog website developed using Next.js version 14 with TypeScript. It leverages the ShadcnUI library for UI components, Redux for state management, and Appwrite for backend services. The website allows users to sign up, log in, create, read, update, and delete blog posts. Users can view popular blogs based on view count, as well as the latest posts. The website also features pages dedicated to displaying blogs by category and author.

## Features
1. **User Authentication:**
   - **Sign Up:** Users can create a new account with a unique username and password.
   - **Log In:** Existing users can log in using their credentials.
   - **Password Reset:** Functionality to reset forgotten passwords is not yet implemented.

2. **Blog Display:**
   - **Most Popular Blogs:** Homepage displays popular blogs based on view count.
   - **Latest Posts:** A component shows the latest blog posts.
   - **Category Pages:** Pages dedicated to displaying blogs by category.
   - **Author Pages:** Pages dedicated to displaying blogs by author.

3. **Blog Management:**
   - **Create:** Logged-in authors can create new blog posts.
   - **Read:** Users can view blog posts on the website.
   - **Update:** Authors can update their own blog posts.
   - **Delete:** Authors can delete their own blog posts.

4. **Authorization:**
   - **Author Permissions:** Authors can only modify their own blog posts and not those of other users.

## Technologies Used
- Next.js 14 with TypeScript
- React
- ShadcnUI for UI components
- Redux for state management
- Appwrite for backend services

## Setup Instructions
1. Clone the repository from [GitHub](https://github.com/SanzEev17/blog-nextjs-redux-appwrite).
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Set up Appwrite backend services and configure the connection details in the project.
5. Run the development server using `npm run dev`.
6. Access the website through the provided URL.

## Usage
- Navigate to the homepage to view popular and latest blog posts.
- Sign up for a new account or log in with existing credentials.
- Authors can create, update, and delete their own blog posts.
- Explore blogs by category or author using dedicated pages.

## Known Issues
- Password reset functionality is not yet implemented.
- Other minor bugs or issues may be present.

## Contributing
Contributions are welcome! Feel free to fork the repository and submit pull requests to suggest improvements or fix issues.

## License
This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
