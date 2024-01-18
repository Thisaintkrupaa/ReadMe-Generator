const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require ("./utils/generateMarkdown");


// array of questions for user
const questions = [

    { 
        type: 'input',
    name: 'title',
    message: 'Enter the title of your project: ',
},


{ 
    type: 'input',
name: 'description',
message: 'provide a description of your Project: ',
},

{ 
    type: 'input',
name: 'installation',
message: 'Enter installation instructions: ',
},

{ 
    type: 'list',
name: 'license',
message: 'choose a license for your project: ',
choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
},


{ 
    type: 'input',
name: 'title',
message: 'Enter the title of your project: ',
}





];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
