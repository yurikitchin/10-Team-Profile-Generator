const employee = require('../lib/employee.js');
 
describe('employee', () => {
  it('Should create an employee object containing name, id, and email', () => {
    expect(fizzBuzz([1])).toBe('1');
    expect(fizzBuzz([1, 2])).toBe('1, 2');
  });})