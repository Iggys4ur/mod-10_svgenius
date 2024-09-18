// iggys4ur: mod-10_svgenius/index.js
// Project: SVG Logo Generator

// Step 1: Include necessary packages
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const { Circle, Square, Triangle } = require('./shapes'); // Shape classes

// Step 2: Create questions for user input
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for your logo:',
        validate: function (input) {
            if (input.length <= 3) return true;
            return 'Please enter 3 characters or less.';
        },
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter a text color (keyword or hex):',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape for the logo:',
        choices: ['circle', 'square', 'triangle'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a shape color (keyword or hex):',
    },
];

// Step 3: Function to generate SVG content
function generateSVG(text, textColor, shape, shapeColor) {
    let shapeInstance;

    switch (shape) {
        case 'circle':
            shapeInstance = new Circle();
            break;
        case 'square':
            shapeInstance = new Square();
            break;
        case 'triangle':
            shapeInstance = new Triangle();
            break;
        default:
            console.log("Invalid shape!");
            return;
    }

    shapeInstance.setColor(shapeColor);

    return `
        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        ${shapeInstance.render()}
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
        </svg>
    `;
}

// Step 4: Function to write the SVG file
function writeToFile(fileName, data) {
    const outputDir = path.join(__dirname, 'out');
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir); // Create 'out' directory if not present
    }

    const filePath = path.join(outputDir, fileName);
    fs.writeFile(filePath, data, (err) =>
        err ? console.log(err) : console.log(`Successfully created ${fileName} in ./out!`)
    );
}

// Step 5: Initialize app and handle user input
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            const svgContent = generateSVG(answers.text, answers.textColor, answers.shape, answers.shapeColor);
            writeToFile('logo.svg', svgContent); // Write SVG file to './out/logo.svg'
        })
        .catch((error) => {
            console.error(error);
        });
}

// Function call to initialize app
init();
