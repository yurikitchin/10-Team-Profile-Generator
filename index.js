const inqurier = require('inquirer')
const fs = require('fs')
const Choices = require('inquirer/lib/objects/choices')
const inquirer = require('inquirer')
//add inqurier questions that take name, id, email, officeNum for office manager
const manager = require('./lib/manager')
const engineer = require('./lib/engineer')
const intern = require('./lib/intern')
const employee = require('./lib/employee')


const newTeam = []

const addEmployees = () => {
   return inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "do you want to add another employee",
            choices: ["Engineer", "Intern"],


        },
        {
            type: "input",
            name: "name",
            message: "please enter Employee name",

        },
        {
            type: "input",
            name: "employeeID",
            message: "Please enter employee ID",

        },
        {
            type: "input",
            name: "email",
            message: "please employee email",

        },
        {
            type: "input",
            name: "school",
            message: "enter interns school name",
            when: function (answers) {
                return answers.role === "Intern"
            }

        },
        {
            type: "input",
            name: "github",
            message: "enter Engineers GitHub username",
            when: function (answers) {
                return answers.role === "Engineer"
            }
        },
        {
            type: "confirm",
            name: "addEmployeePrompt",
            message: "do you want to add another employee",
            default: false
        }

    ])
        .then(employeeData => {
            let {name, employeeID, email, school, github, addEmployeePrompt} = employeeData;
            let newEmployee;
            if (employeeData.role === "Intern") {
                newEmployee = new intern (name, employeeID, email, school)
                console.log(newEmployee)
            }
            if (employeeData.role === "Engineer") {
                newEmployee = new engineer (name, employeeID, email, github)
                console.log(newEmployee)
            }
            newTeam.push(newEmployee);
            if (addEmployeePrompt){
                return addEmployees(newTeam)
            } 
            else {
                console.log(newTeam)
                return newTeam
            }
        })


}

const managerQuestions = () => {
   return inqurier.prompt([
        {
            type: "input",
            message: "please enter Managers's name",
            name: "name",

        },
        {
            type: "input",
            message: "please enter your office number",
            name: "officeNum"
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
    ])
        .then(managerData => {
            const managerInfo = new manager (managerData.name, managerData.officeNum, managerData.employeeID, managerData.email)
            newTeam.push(managerInfo)
            console.log("this works")
            console.log(managerInfo)
        })

}




//add fuction to initilize and ask user first set of questions


managerQuestions()
   .then(addEmployees)
