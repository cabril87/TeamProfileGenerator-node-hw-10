// // Starter file provided by Instructor (03/09/2021) AC

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const team = [];


const startQuestion = () => {
    inquirer.prompt(
        [
            {
                type: "list",
                name: "role",
                message: " What you like to add an employee?",
                choices: ['Manager', 'Engineer', 'Intern', 'Im done']
            }
        ]
    ).then((answer) => {
        switch (answer.role) {
            case "Manager":
                askManager();
                break;
            case "Engineer":
                askEngineer();
                break;
            case "Intern":
                askIntern();
                break;
            default:
                buildTeam();
        }
    })
}
const askManager = () => {
    inquirer.prompt(managerQuestions).then(answer => {
        console.log(answer);
        const manager = new Manager(answer.name, answer.id, answer.email, answer.officenumber);
        team.push(manager)
        startQuestion();
    });
}
const askEngineer = () => {
    inquirer.prompt(engineerQuestions).then(answer => {
        console.log(answer);
        const engineer = new Engineer(answer.name, answer.id, answer.email, answer.github);
        team.push(engineer)
        startQuestion();
    });
}
const askIntern = () => {
    inquirer.prompt(internQuestions).then(answer => {
        console.log(answer);
        const intern = new Intern(answer.name, answer.id, answer.email, answer.school);
        team.push(intern)
        startQuestion();
    });
}
const engineerQuestions = [
    {
        type: "input",
        name: "name",
        message: "Enter the employee's name!",
        validate: answer => {
            if (answer !== "") {
                return true;
            }
            return "Please enter the employee's name."
        }
    },
    {
        type: "input",
        name: "id",
        message: "Enter the employee's id number!",
        // validate: answer => {
        //     console.log(answer);
        // const pass = answer.match(/^[1-9]\d$/);
        // console.log(pass);
        // if(pass) {
        //     return true;
        // }
        // return "Id must be 4 digits long"
        // }
    },
    {
        type: "input",
        name: "email",
        message: "Enter the employee's email address!"
    },
    {
        type: "input",
        name: "github",
        message: "Enter the employee's github user name!",
        validate: answer => {
            if (answer !== "") {
                return true;
            }
            return "Please enter the employee's name."
        }
    }
]
const managerQuestions = [
    {
        type: "input",
        name: "name",
        message: "Enter the employee's name!",
        validate: answer => {
            if (answer !== "") {
                return true;
            }
            return "Please enter the employee's name."
        }
    },
    {
        type: "input",
        name: "id",
        message: "Enter the employee's id number!"
    },
    {
        type: "input",
        name: "email",
        message: "Enter the employee's email address!"
    },
    {
        type: "input",
        name: "officenumber",
        message: "Enter the employee's office number!"
    }
]
const internQuestions = [
    {
        type: "input",
        name: "name",
        message: "Enter the intern's name!",
        validate: answer => {
            if (answer !== "") {
                return true;
            }
            return "Please enter the employee's name."
        }
    },
    {
        type: "input",
        name: "id",
        message: "Enter the intern's id number!"
    },
    {
        type: "input",
        name: "email",
        message: "Enter the intern's email address!"
    },
    {
        type: "input",
        name: "school",
        message: "What school do you go to?",
        validate: answer => {
            if (answer !== "") {
                return true;
            }
            return "Please enter the employee's name."
        }
    }
]

const buildTeam = () => {
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(team), "utf-8")
}

const init = () => {
    startQuestion();
}

init();

