

//test for office
describe ("Get all offices", ()=>{
    it("should return a list of political offices", ()=>{
        let allOffices = router.getalloffices(offices);

        expect(allOffices).to.equal([]);
    });
});

describe ("Get a specific office", ()=>{
    it("should return a specific  political office", ()=>{
        let Office = router.getoffice(office);

        expect(Office).to.equal(office);
    });
});

describe ("Create a new political office", ()=>{
    it("should return a new created  political office", ()=>{
        let Office = router.postoffice(office);

        expect(Office).to.equal(office);
    });
});

