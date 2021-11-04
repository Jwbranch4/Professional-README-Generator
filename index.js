// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the email address you would like to be contacted from?",
  },
  {
    type: "input",
    name: "title",
    message: "What is the name of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Please give a description of the project.",
  },
  {
    type: "input",
    name: "installation",
    message: "Please describe how to install the application.",
  },
  {
    type: "input",
    name: "usage",
    message: "Please describe how to use the application.",
  },
  {
    type: "confirm",
    name: "contribution",
    message: "Would you like to use Contributor Covenant Code of Conduct?",
    default: true,
  },
  {
    type: "input",
    name: "test",
    message: "What are the steps to test application?",
  },
  {
    type: "list",
    name: "license",
    message: "What kind of license to you have for your project?",
    choices: ["MIT", "Apache", "GPLv3"],
  },
];

const fileName = "./sample/README.md";

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const readMe = generateMarkdown(data);
  fs.writeFile(fileName, readMe, (err) => {
    if (err) throw err;
    console.log("README is done!");
  });
}

// TODO: Create a function to initialize app
function init() {
  return inquirer.prompt(questions).then((data) => {
    writeToFile(fileName, data);
  });
}

// Function call to initialize app
init();
