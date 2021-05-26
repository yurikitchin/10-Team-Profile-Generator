const { expect } = require('@jest/globals');
const { number } = require('yargs');
const employee = require('../lib/employee.js');
 
describe('employee', () => {
  it('Should create an employee object containing name, id, and email', () => {
   const employeeTest = new employee("yuri", 11, 'ykitchin@gmail.com');
   expect(employeeTest.name).toEqual(expect.any(String))
   expect(employeeTest.id).toEqual(expect.any(Number))
   expect(employeeTest.email).toEqual(expect.any(String))
  });})

  describe('employee', () =>{
    it('the getName() method should return the emplyee name as a string', () => {
      const employeeTest = new employee("yuri", 11, 'ykitchin@gmail.com');
      expect(employeeTest.getName()).toBeDefined()
    })
  })

  describe('employee', () =>{
    it('the getID() method should return the emplyee ID as an Integer', () => {
      const employeeTest = new employee("yuri", 11, 'ykitchin@gmail.com');
      expect(employeeTest.getID()).toEqual(expect.any(Number))
    })
  })

  describe('employee', () =>{
    it('the getEmail() method should return the emplyee email as a string', () => {
      const employeeTest = new employee("yuri", 11, 'ykitchin@gmail.com');
      expect(employeeTest.getEmail()).toEqual(expect.any(String))
    })
  })