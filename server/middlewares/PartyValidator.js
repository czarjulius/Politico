class PartyValidator {
  static checkLength(req, res, next) {
    return res.status(401).json({
      message: 'Party doesn\'t exist',
    });
    next();
  }

  static validateFields(req, res, next) {
    const errors = [];
    const { name, logoUrl, hqAddress } = req.body;
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
