// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius", () => {
  it("should encode a message by translating each letter into a pair of numbers", () => {
    expect(polybius("thinkful")).to.eql("4432423352125413");
  });

  it("should leave spaces and ignores capital letters", () => {
    expect(polybius("Hello world")).to.eql("3251131343 2543241341");
  });

  it("should decode a message by translating each pair of numbers into a letter", () => {
    expect(polybius("3251131343 2543241341", false)).to.eql("hello world");
  });

  it("should translate 42 to both 'i' and 'j'", () => {
    expect(polybius("4432423352125413", false)).to.eql("th(i/j)nkful");
  });

  it("should return false if the length of all numbers is odd", () => {
    expect(polybius("443242 3352 1254134", false)).to.be.false;
  });
});
