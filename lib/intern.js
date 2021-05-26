const employee = require("./employee");

class intern extends employee {
    constructor(name, id, email, school){
        super(name, id, email)
        this.school = school
        }
//add getSchool Method that retuns School
getSchool() {
    return this.school
}
getRole() {
    return "Intern"
}
    
}

module.exports = intern