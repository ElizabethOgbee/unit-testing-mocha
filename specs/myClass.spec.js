const MyClass = require("../src/myClass.js");
const myObj = new MyClass();
const chai = require("chai");
const expect = chai.expect;

//we have to write a test suit we should write test cases inside it
//when using mocha, the first thing we write is describe

//test suit is bascally the collections of test cases
describe("Test suit", function () {
    //now we want to write our first cases
    //first test cases will be to test the add function

    //we write test cases using if method
    it("Test the add method", function () {
        expect(myObj.add(1, 2)).to.be.equal(3);
    });
});