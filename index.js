const inqurier = require('inquirer')
const fs = require('fs')
const Choices = require('inquirer/lib/objects/choices')
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
]

const engineerQuestions = [
    {
        type: "input",
        message: "please enter Engineers's name",
        name: "name",
 
     },
    {
        type: "input",
        message: "enter Engineers GitHub username",
        name: "github"
    }
 
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

const internQuestions = [
    {
        type: "input",
        message: "please enter Interns name",
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
    {
        type: "input",
        message: "enter interns school name",
        name: "school"
    }
]

const addMoreEmployees = [
    {
        type: "list",
        message: "do you want to add another employee",
        choices:["Employee","Engineer", "Intern", "Finish"]

    }
]
//add fuction to initilize and ask user first set of questions
function addMoreEmployeeClass() {
    inqurier.prompt(addMoreEmployees).then((data) => {
        console.log("this works")
        console.log(data)
    })

}

function run() {
    inqurier.prompt(employeeQuestions, managerQuestions).then((data) => {
        console.log("this works")
        console.log(data)
    })
    addMoreEmployeeClass()
}
  

run()