
import offices from '../models/offices';

class OfficeController {


  
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

  

}

export default OfficeController;
