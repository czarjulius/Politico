

class OfficeController {

  static getOffice(req, res) {
    const singleOffice = offices.find(office => office.id === parseInt(req.params.id, 10));
    if (!singleOffice) {return res.status(404).json({
      message: 'The office with the given ID not found.',
    });
    }
    
    return res.status(201).json({
      message: 'Office successfully fetched',
      singleOffice,
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
  }

}

export default OfficeController;
