const { expect } = require('@jest/globals');
const employee = require('../lib/employee.js');
 
describe('employee', () => {
  it('Should create an employee object containing name, id, and email', () => {
   const employeeTest = new employee("yuri", 11, 'ykitchin@gmail.com');
   expect(employeeTest.name).toEqual(expect.any(String))
  });})