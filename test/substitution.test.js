const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution()", () => {
    it("It returns false if the given alphabet isn't exactly 26 characters long", () => {
        const alphabet = "wakawaka";
        const input = "helloworld";
        const actual = substitution(input, alphabet);
        const expected = false;
    expect(actual).to.equal(false)
    });
    it("It correctly translates the given phrase, based on the alphabet given to the function", () => {
        const alphabet = "qwertyuiopasdfghjklzxcvbnm";
        const input = "helloworld";
        encode = true;
        const actual = substitution(input, alphabet, encode);
        const expected = "itssgvgksr";
    expect(actual).to.equal(expected)
    });   
    it("It returns false if there are any duplicate characters in the given alphabet", () => {
        const alphabet = "qwertyuiopasdfggggaaxacvbnm";
        const input = "helloworld";
        encode = true;
        const actual = substitution(input, alphabet, encode);
    expect(actual).to.be.false;
    });  
    it("It maintains spaces in the message, before and after encoding or decoding", () => {
        const alphabet = "qwertyuiopasdfghjklzxcvbnm";
        const input = " hello world ";
        encode = true;
        const actual = substitution(input, alphabet, encode);
        const expected = " itssg vgksr ";
    expect(actual).to.equal(expected);
    });     
    it("It ignores capital letters", () => {
        const alphabet = "qwertyuiopasdfghjklzxcvbnm";
        const input = " Hello World ";
        encode = true;
        const actual = substitution(input, alphabet, encode);
        const expected = " itssg vgksr ";
    expect(actual).to.equal(expected);
    });     
});
