import parties from '../models/parties';

class PartyController {


  static getParty(req, res) {
    const party = parties.find(c => c.id === parseInt(req.params.id, 10));
    if (!party) return res.status(404).json({
      message: 'The party with the given ID not found.',
    });

    res.status(201).json({
      message: 'Party successfully fetched',
      party,
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

}

export default PartyController;
