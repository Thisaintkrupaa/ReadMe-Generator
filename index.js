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
message: 'what command should be used to run dependencies',
default: 'npm test'
},

{ 
    type: 'input',
name: 'usage',
message: 'What should the user know about using the repo?',
},

{ 
    type: 'list',
name: 'license',
message: 'choose a license for your project: ',
choices: ['MIT', 'APACHE ', 'GPL', 'BSD', 'None']
},

{ 
    type: 'input',
name: 'contribution',
message: 'What does the user know about contributing to the repo?',
},


{ 
    type: 'input',
name: 'testscommand',
message: 'what command should be used to run tests',
default: 'npm i'
},

{ 
    type: 'input',
name: 'github',
message: 'Enter your Github Username: ',
},

{ 
    type: 'input',
name: 'email',
message: 'Enter your Email Address: ',
},

];

// function to write README file 
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data , (err) => err ? console.log(err) : console.log('Generating ReadMe.../Succesfully Generated!!!'));
};
     

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then((response) => { 
        const readmeContent = generateMarkdown(response);
        writeToFile('README.md' ,readmeContent);   
    })


    .catch((error) => {
        console.error(error);
    });

}

// function call to initialize program
init();

