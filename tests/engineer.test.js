const { expect } = require('@jest/globals');
const engineer = require('../lib/engineer.js');
 
describe('employee', () => {
  it('Should create an engineer object containing name, id, email and github', () => {
   const engineerTest = new engineer("yuri", 11, 'ykitchin@gmail.com', "github");
   expect(engineerTest.name).toEqual(expect.any(String))
   expect(engineerTest.id).toEqual(expect.any(Number))
   expect(engineerTest.email).toEqual(expect.any(String))
   expect(engineerTest.github).toEqual(expect.any(String))
  });})