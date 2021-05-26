const employee = require("./employee");

//extend employee class to add manager child class, with officeNumber and new getRole
class manager extends employee {
    constructor(name, id, email, officeNum){
    super(name, id, email)
    this.officeNum = officeNum
    }
}

module.exports = manager