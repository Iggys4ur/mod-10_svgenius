
# [Module 10] SVGenesis: Node.js Command-Line SVG Logo Maker

## Overview

SVGenesis is a Node.js command-line application that allows users to create custom SVG logos based on user input. This tool provides an interactive experience where users can choose a shape, color, and text to generate a personalized logo, which is then saved as an SVG file. The application leverages the power of Node.js for handling file operations and managing user input.

## Features

- **Interactive Command-Line Interface**: Users can easily generate logos by following prompts to select shape, color, and text.
- **SVG Generation**: The application creates scalable vector graphics (SVG) files, ensuring that logos are high-quality and scalable to any size without loss of quality.
- **Customizable Options**: Users can select from a variety of shapes and colors, and input their own text to personalize their logo.

## Technologies Used

- **Node.js**: For executing JavaScript on the server-side and handling the command-line interface.
- **Inquirer.js**: For creating an interactive command-line experience and capturing user input.
- **fs (File System) Module**: For reading and writing files, allowing the application to save the generated SVG logos.

## Installation

To install and run SVGenesis locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/Iggys4ur/mod-10_svgenius.git
   ```
2. Navigate to the project directory:
   ```bash
   cd svgenius
   ```
3. Install the necessary dependencies:
   ```bash
   npm install
   ```

## Usage

1. Run the application using Node.js:
   ```bash
   node index.js
   ```
2. Follow the prompts to select a shape, choose a color, and enter the text for your logo.
3. After completing the prompts, the SVG logo will be generated and saved to the current directory.

## Demo

A walkthrough video demonstrating the steps to generate a logo, from starting the application to saving the SVG file:

[Link to README with embedded demo.np4 (file too large for github)](https://iggys4ur.github.io/mod-10_svgenius/)

<video width="480" height="360" controls>
  <source src="./demo.mp4" type="video/mp4">
</video>

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
