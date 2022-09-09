const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius()", () => {
it("When encoding, it translates the letters i and j to 42", () => {
    const input = "justice";
    const encode = true
    const expected = "42543444423151";
    const actual = polybius(input, encode);
    expect(actual).to.equal(expected)
});
it("When decoding, it translates 42 to (i/j)", () => {
    const input = "42543444423151";
    const encode = false
    const expected = "(i/j)ust(i/j)ce";
    const actual = polybius(input, encode);
    expect(actual).to.equal(expected)
});
it("It ignores capital letters", () => {
    const input = "Justice";
    const encode = true
    const expected = "42543444423151";
    const actual = polybius(input, encode);
    expect(actual).to.equal(expected)
});
it("When encoding, it maintains spaces in the message", () => {
    const input = " just us";
    const encode = true
    const expected = " 42543444 5434";
    const actual = polybius(input, encode);
    expect(actual).to.equal(expected)
});
it("When decoding, it maintains spaces in the message", () => {
    const input = " 42543444 5434";
    const encode = false
    const expected = " (i/j)ust us";
    const actual = polybius(input, encode);
    expect(actual).to.equal(expected)
});
});