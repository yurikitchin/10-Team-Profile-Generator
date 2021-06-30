const employee = require("./employee");

class engineer extends employee{
        constructor(name, id, email, github){
        super(name, id, email)
        this.github = github

        }
        //add getGithub method that returns github username as a string
        getGithub() {
            return this.github
        }
        //add getRole method that returns "Engineer" as a string
        getRole() {
            return "Engineer"
        }
}

module.exports = engineer