const { expect } = require('@jest/globals');
const { number } = require('yargs');
const employee = require('../lib/engineer.js');
 
describe('employee', () => {
  it('Should create an employee object containing name, id, and email', () => {
   const employeeTest = new employee("yuri", 11, 'ykitchin@gmail.com');
   expect(employeeTest.name).toEqual(expect.any(String))
   expect(employeeTest.id).toEqual(expect.any(Number))
   expect(employeeTest.email).toEqual(expect.any(String))
  });})