const assert =  require('assert');
const router = require('./src/routes');

describe ("Get all parties", ()=>{
    it("should return a list of political parties", ()=>{
        let allParties = router.getallparties(parties);

        expect(allParties).to.equal([]);
    });
});

describe ("Get a specific party", ()=>{
    it("should return a specific  political party", ()=>{
        let Party = router.getparty(party);

        expect(Party).to.equal(party);
    });
});

describe ("Create a new political party", ()=>{
    it("should return a new created  political party", ()=>{
        let Party = router.postparty(party);

        expect(Party).to.equal(party);
    });
});

describe ("Update a political party", ()=>{
    it("should return an updated  political party", ()=>{
        let Party = router.postparty(party);

        expect(Party).to.equal(party);
    });
});
describe ("Delete a  political party", ()=>{
    it("should remove a political party", ()=>{
        let Party = router.postparty(party);

        expect(Party).to.equal(party);
    });
});
