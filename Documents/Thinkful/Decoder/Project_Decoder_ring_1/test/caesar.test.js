const { expect } = require("chai");
const { caesar } = require("../src/caesar");

// Write your tests here!
describe("caesar", () => {
  it("returns false when an invalid shift is given", () => {
    expect(caesar("")).to.be.false;
    expect(caesar("", 0)).to.be.false;
    expect(caesar("", -26)).to.be.false;
    expect(caesar("", 26)).to.be.false;
  });

  it("should encode a message by shifting the letters", () => {
    expect(caesar("thinkful", 3)).to.eql("wklqnixo");
    expect(caesar("thinkful", -3)).to.eql("qefkhcri");
    expect(caesar("wklqnixo", 3, false)).to.eql("thinkful");
  });

  it("should leaves spaces and other symbols as is", () => {
    expect(caesar('thinkful thinkful !*!!!' , 3)).to.eql('wklqnixo wklqnixo !*!!!')
    expect(caesar("This is a secret message!", 8)).to.eql(
      "bpqa qa i amkzmb umaaiom!"
    );
  });

  it("should ignore capital letters", () => {
    expect(caesar("BPQA qa I amkzmb umaaiom!", 8, false)).to.eql(
      "this is a secret message!"
    );
  });
});
