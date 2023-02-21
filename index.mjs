// creating variable and using require function to bring in Inquirer
import inquirer from 'inquirer';
import fs from 'fs/promises';
import generateMarkdown from './utils/generateMarkdown.js';

// function to write README file takes in fileName and user data parameters
function writeToFile(fileName, data) {
	// writing file and syncing it using path to join the current working directory using the fileName and user data.
	fs.writeFile(fileName, data, err => {
		if (err) {
			return console.log(err);
		}
		console.log("Success! Your README.md file has been generated")
	});
}

// function to initialize program
function init() {
	// inquirer prompted questions for user//VIA command-line prompts
	inquirer.prompt([
		{
			// Takes user text input
			type: "input",
			name: "title",
			message: "What's Your Projects Name?",
			validate: function (answer) {
				if (answer.length < 1) {
					return console.log("A valid project title is required.");
				}
				return true;
			}
		},
		{
			type: "input",
			name: "description",
			message: "Write a descrition of your project:",
			validate: function (answer) {
				if (answer.length < 1) {
					return console.log("A description is required.");
				}
				return true;
			}
		},
		{
			type: "input",
			name: "username",
			message: "Enter Your Github Username"
		},
		{
			type: "input",
			name: "email",
			message: "Enter Your Email Address"
		},
		{
			type: "input",
			name: "installation",
			message: "Enter Your Projects Installation Instructions"
		},
		{
			type: "input",
			name: "usage",
			message: "Enter Usage Info"
		},
		{
			type: "input",
			name: "contribution",
			message: "Enter Your Project Contribution Guidelines",
			default:
				"Please see the Questions section below to contact the author to be added as a contributor.",
		},
		{
			type: "input",
			name: "tests",
			message: "Enter Test Instructions",
			default: "npm test"
		},
		{
			// Takes user input via checkbox using spacebar to add choice and up and down keys to move down list
			type: "list",
			message: "Licensing Options",
			name: "license",
			choices: [
				"GNU AGPLv3",
				"GNU GPLv3",
				"GNU LGPLv3",
				"Mozilla Public License 2.0",
				"Apache License 2.0",
				"MIT License",
				"Boost Software License 1.0",
				"The Unlicense"
			]
		},
		{
			type: "input",
			name: "questions",
			message: "Enter your questions"
		}

		// Where the user input is stored (data)
	]).then(function (data) {
		// message for the user
		console.log("Generating Markdown...");
		// calling function writeToFile(fileName, data) using "README.md" and generateMarkdown(data) parameters & uses a spread opperater to spread data. 
		writeToFile("README.md", generateMarkdown({ ...data }));
	});
}
// function call to initialize program
init()