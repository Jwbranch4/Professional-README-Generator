// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
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
    message: "Please describe what the app is used for",
  },
  {
    type: "input",
    name: "contribution",
    message: "What are the contribution guidelines?",
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
    choices: ["MIT"],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
