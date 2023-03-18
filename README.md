# Technical Challenge De Gruyter
The project is a web page that displays a list of available ISBNs from a JSON file. The web page is designed based on the UX design provided. Each ISBN item in the list is clickable and displays the book cover image that corresponds to the ISBN. Additionally, the web page displays book information such as the ISBN, title, and the converted roman numeral of the appendix page numbers. If the ISBN is invalid, the web page displays a default image and an error message.

![Screenshoot](https://res.cloudinary.com/dwtnqtdcs/image/upload/v1679101669/degruyter_lxx0qk.png)

You can find my deployed project at [https://techdegruyter.netlify.app/]

## Installation
Clone the repository.
Navigate to the project directory in your terminal.
Run npm install to install the dependencies.

## Usage
Run npm start to start the development server.
Open http://localhost:3000 in your browser to view the project.

## Features
Display a list of available ISBNs from a JSON file
Display book information (Cover, ISBN, title, and appendix)
Validate ISBN format 
Show default image and error message if no book cover image found for ISBN
Clickable ISBN items to view book details
Responsive design for optimal viewing on different screen sizes
Followed UX design provided by client
Deployed to a web server for public access.

## Technologies
React.js: JavaScript library for building user interfaces
CSS: Styling language for web development
Git: Version control system for tracking changes in code
GitHub: Web-based platform for hosting and sharing code repositories
Visual Studio Code: Code editor for developing web applications
Node.js: JavaScript runtime environment for running JavaScript on the server-side
NPM: Package manager for installing and managing dependencies in Node.js projects
