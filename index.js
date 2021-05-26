const inqurier = require('inquirer')
const fs = require('fs')
//add inqurier questions that take name, id, email, officeNum for office manager
const employeeQuestions = [
    {
       type: "input",
       message: "please enter employee's name",
       name: "name",

    },
    {
        type: "input",
        message: "Please enter employee ID",
        name: "employeeID"
    },
    {
        type: "input",
        message: "please employee email",
        name: "email"
    }
]

const managerQuestions = [
    {
        type: "input",
        message: "please enter your office number",
        name: "officeNum"
    }
]

const engineerQuestions = [
    {
        type: "input",
        message: "enter employees GitHub username",
        name: "github"
    }
]

const internQuestions = [
    {
        type: "input",
        message: "enter interns school name",
        name: "school"
    }
]
//add fuction to initilize and ask user first set of questions

function run() {
    inqurier.prompt(employeeQuestions, managerQuestions).then((data) => {
        console.log("this works")
        console.log(data)
    }
    )}

run()