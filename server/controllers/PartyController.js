import parties from '../models/parties';

class PartyController {


  static getParty(req, res) {
    const singleParty = parties.find(party => party.id === parseInt(req.params.id, 10));
    if (!singleParty) {
      return res.status(404).json({
        message: 'The party with the given ID not found.',
      });
    }

    res.status(201).json({
      message: 'Party successfully fetched',
      singleParty,
    });
  }

  static postParty(req, res) {
    const { name, hqAddress, logoUrl } = req.body;

    const party = {
      id: parties.length + 1,
      name,
      hqAddress,
      logoUrl,
    };

    parties.push(party);
    res.status(201).json({
      status: 'success',
      message: 'Party created successfully',
      party,
    });
  }

  static patchParty(req, res) {
    const { id } = req.params;
    const { name, hqAddress, logoUrl } = req.body;
    const singleParty = parties.find(party => party.id === parseInt(id, 10));
    if (!singleParty) return res.status(404).send('The party with the given ID not found.');
    parties[id - 1].name = name,
    parties[id - 1].hqAddress = hqAddress,
    parties[id - 1].logoUrl = logoUrl;
    res.send(parties[id - 1]);
  }

  static getParties(req, res) {
    res.status(201).json({
      message: 'All Parties successfully fetched',
      parties,
    });
  }

  static deleteParty(req, res) {
    const singleParty = parties.find(party => party.id === parseInt(req.params.id, 10));
    if (!singleParty) res.status(404).send('The party with the given ID not found.');

    const index = parties.indexOf(singleParty);
    parties.splice(index, 1);
    res.send(singleParty);
  }

}

export default PartyController;


