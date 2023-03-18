# Technical Challenge De Gruyter
The project is a web page that displays a list of available ISBNs from a JSON file. The web page is designed based on the UX design provided. Each ISBN item in the list is clickable and displays the book cover image that corresponds to the ISBN. Additionally, the web page displays book information such as the ISBN, title, and the converted roman numeral of the appendix page numbers. If the ISBN is invalid, the web page displays a default image and an error message.

![Screenshoot](https://res.cloudinary.com/dwtnqtdcs/image/upload/v1679101669/degruyter_lxx0qk.png)

You can find my deployed project at [https://techdegruyter.netlify.app/]

## Installation
- Clone the repository.
- Navigate to the project directory in your terminal.
- Run npm install to install the dependencies.

## Usage
- Run npm start to start the development server.
- Open http://localhost:3000 in your browser to view the project.

## Features
- Display a list of available ISBNs from a JSON file
- Display book information (Cover, ISBN, title, and appendix)
- Validate ISBN format 
- Show default image and error message if no book cover image found for ISBN
- Clickable ISBN items to view book details
- Responsive design for optimal viewing on different screen sizes
- Followed UX design provided by client
- Deployed to a web server for public access.

## Technologies
- React.js: JavaScript library for building user interfaces
- CSS: Styling language for web development
- Git: Version control system for tracking changes in code
- GitHub: Web-based platform for hosting and sharing code repositories
- Visual Studio Code: Code editor for developing web applications
- Node.js: JavaScript runtime environment for running JavaScript on the server-side
- NPM: Package manager for installing and managing dependencies in Node.js projects

### EXERCISE 2

The output of this code is that it displays all the console.log statements simultaneously, as the setTimeout is the same for all iterations (1000ms). To resolve the issue and obtain the desired output, we need to multiply the time (1000ms) for each iteration i, and we will get each console.log every second until it finish the whole loop.

```
function timer(i) {
  setTimeout(function(){
    console.log(i);
  }, 1000 * i);
}

for (var i = 0; i < 10; i++) {
  timer(i);
}
```


here is link to CodePen to see it working: [https://codepen.io/jpta24/pen/oNPMxNy?editors=0012]
