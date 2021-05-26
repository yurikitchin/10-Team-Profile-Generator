const { expect } = require('@jest/globals');
const intern = require('../lib/intern.js');
 
describe('intern', () => {
  it('Should create an intern object containing name, id, email and school', () => {
   const internTest = new intern("yuri", 11, 'ykitchin@gmail.com', "school");
   expect(internTest.name).toEqual(expect.any(String))
   expect(internTest.id).toEqual(expect.any(Number))
   expect(internTest.email).toEqual(expect.any(String))
   expect(internTest.school).toEqual(expect.any(String))
  });})