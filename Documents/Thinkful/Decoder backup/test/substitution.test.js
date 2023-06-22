// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution", () => {
    it("should return false if the substitution alphabet is missing", () => {
      expect(substitution("")).to.be.false;
    });

    it("Key must contain exactly 26 characters", () =>{
        expect(substitution("", '209')).to.be.false;
    })
    
    it("should return false if the substitution alphabet does not contain unique characters", () => {
        expect(substitution("", 'aaaaaaaaaaaaaaaaaaaaaaaaaa')).to.be.false;
    })

    it("should encode a message by using the given substitution alphabet", () => {
        expect(substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev")).to.eql('jrufscpw')
    })

    it("should leaves spaces and other symbols as is", () =>{
        expect(substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev")).to.eql('elp xhm xf mbymwwmfj dne')
        expect(substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false)).to.eql('message')
    })

})