const { expect } = require('@jest/globals');
const manager = require('../lib/manager.js');

describe('manager', () => {
    it('Should create an manager object containing name, id,email and office number', () => {
     const managerTest = new manager("yuri", 11, 'ykitchin@gmail.com', 1);
     expect(managerTest.name).toEqual(expect.any(String))
     expect(managerTest.id).toEqual(expect.any(Number))
     expect(managerTest.email).toEqual(expect.any(String))
     expect(managerTest.officeNum).toEqual(expect.any(Number))
    });})

    describe('manager', () => {
      it('officeNum method should return a number', () => {
      const managerTest = new manager("yuri", 11, 'ykitchin@gmail.com', 1);
      expect(managerTest.officeNumer()).toEqual(expect.any(Number))
    });})

    describe('manager', () => {
        it('getRole method should return a "Manager"', () => {
        const managerTest = new manager("yuri", 11, 'ykitchin@gmail.com', 1);
        expect(managerTest.getRole()).toEqual("Manager")
      });})