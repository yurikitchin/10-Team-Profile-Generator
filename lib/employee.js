//Employee constructor
class employee {
    constructor(name, id, email){
    this.name = name;
    this.id = id;
    this.email = email;
    }   
    //add getName method that returns the employee name as a string
    getName() {
        return this.name
    }
    //add getID method that returns the employee id as an integer
    getID() {
        return this.id
    } 
    //add getEmail method that returns the inputed email
    //future functionality to check email is valid
    getEmail() {
        return this.email
    } 
    //add getRole method that returns employee as a string
    getRole() {
        return "Employee"
    }
}

    //export employee class
    module.exports = employee