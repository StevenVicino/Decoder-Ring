const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar()", () => {
    it("It returns false if the shift value is equal to 0", () => {
        const shift = 0;
        const input = "Hello World";
        const expected = false;
        const actual  = caesar(input, shift); 
        expect(actual).to.equal(expected)
    });
    it("It returns false if Shift is Less than -25", () => {
        const shift = -26;
        const input = "Hello World";
        const expected = false;
        const actual  = caesar(input, shift); 
        expect(actual).to.equal(expected)
    });
    it("It returns false if Shift is greater than 25", () => {
        const shift = 26;
        const input = "helloworld";
        const expected = false;
        const actual  = caesar(input, shift); 
        expect(actual).to.equal(expected)
    });
    it("It returns false if Shift is not present", () => {
        const shift = ""
        const input = "helloworld";
        const expected = false;
        const actual  = caesar(input, shift); 
        expect(actual).to.equal(expected)
    });
    it("Ignores capital letters", () => {
        const shift = 3
        const input = "HelloWorld";
        const expected = "khoorzruog";
        const actual  = caesar(input, shift); 
        expect(actual).to.equal(expected)
    });
    it("Ignores capital letters", () => {
        const shift = 7
        const input = "HelloWorld";
        const expected = "olssvdvysk";
        const actual  = caesar(input, shift); 
        expect(actual).to.equal(expected)
    });
    it("It maintains spaces and other nonalphabetic symbols in the message, before and after encoding or decoding", () => {
        const shift = 3
        const input = "Hello World";
        const expected = "khoor zruog";
        const actual  = caesar(input, shift); 
        expect(actual).to.equal(expected)
    });

});