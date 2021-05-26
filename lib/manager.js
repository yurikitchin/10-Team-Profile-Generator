const employee = require("./employee");

//extend employee class to add manager child class, with officeNumber and new getRole
class manager extends employee {
    constructor(name, id, email, officeNum){
    super(name, id, email)
    this.officeNum = officeNum
    }
    //add get officeNum method that returns office number
    officeNum(){
        return this.officeNum
    }
    //add getRole method that returns "manager as a string"
    getRole(){
        return "Manager"
    }
}

module.exports = manager