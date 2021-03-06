class PartyValidator {    
  static validateFields(req, res, next) {
    const errors = [];
    const { name, logoUrl } = req.body;
    const { isAdmin } = req.decoded;
    if (!isAdmin) {
      return res.status(400).json({
        status: 'failed',
        message: 'Only an Admin can perform this action',
      });
    }
  
    if (name === '' || name === undefined) {
      errors.push({
        param: 'name',
        message: 'name is required',
      });
    }

    if (name && name.length < 2) {
      errors.push({
        param: 'name',
        message: 'name should be more than 2 characters',
      });
    }

    if (logoUrl === '' || logoUrl === undefined) {
      errors.push({
        param: 'name',
        message: 'name is required and must be more than 2 characters'
      });
    }

    if (errors.length) {
      return res.status(422).json({
        status: 'failed',
        errors,
      });
    }
    next();
  }
}

export default PartyValidator;
