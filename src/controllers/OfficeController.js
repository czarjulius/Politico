
import offices from '../models/offices';

class OfficeController {

    static getOffice(req, res) {
        const office = offices.find(c => c.id === parseInt(req.params.id, 10));
        if (!office) {return res.status(404).json({
          message: 'The office with the given ID not found.',
        });}
    
        res.status(201).json({
          message: 'Office successfully fetched',
          office,
        });
      }
    
  
  static postoffice(req, res) {
    const { type, name } = req.body;

    const office = {
      id: offices.length + 1,
      type,
      name,
    };

    offices.push(office);
    res.status(201).json({
      status: 'success',
      message: 'office created successfully',
      office,
    });
  }

  static getOffices(req, res) {
    res.status(201).json({
      message: 'All Offices successfully fetched',
      offices,
    });
    res.send(offices);
  }

}

export default OfficeController;
