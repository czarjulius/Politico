import parties from '../models/parties';

class PartyController {
  static getParties(req, res) {
    res.send(parties);
  }

  static getParty(req, res) {
    const party = parties.find(c => c.id === parseInt(req.params.id, 10));
    if (!party) res.status(404).send('The party with the given ID not found.');
    res.send(party);
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
    const party = parties.find(c => c.id === parseInt(req.params.id, 10));
    if (!party) res.status(404).send('The party with the given ID not found.');

    party.name = req.body.name,
    party.hqAddress = req.body.hqAddress,
    party.logoUrl = req.body.logoUrl;
    res.send(party);
  }

  static deleteParty(req, res) {
    const party = parties.find(c => c.id === parseInt(req.params.id, 10));
    if (!party) res.status(404).send('The party with the given ID not found.');

    const index = parties.indexOf(party);
    parties.splice(index, 1);
    res.send(party);
  }
}

export default PartyController;
