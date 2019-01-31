import offices from '../models/offices';

class OfficeController {
  static getOffice(req, res) {
    const office = offices.find(c => c.id === parseInt(req.params.id, 10));
    if (!office) res.status(404).send('The office with the given ID not found.');
    res.send(office);
  }

  static getOfficies(req, res) {
    res.send(offices);
  }

  static postOffice(req, res) {
    const office = {
      id: offices.length + 1,
      type: req.body.type,
      name: req.body.name,
    };
    offices.push(office);
    res.send(office);
  }
}

export default OfficeController;
