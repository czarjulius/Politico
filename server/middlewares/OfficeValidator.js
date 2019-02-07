class OfficeValidator { 
  static validateFields(req, res, next) {
    const errors = [];
    const { type, name } = req.body;
    if (type === '' || type === undefined) {
      errors.push({
        param: 'type',
        message: 'type is required',
      });
    }

    if (type && type.length < 2) {
      errors.push({
        param: 'type',
        message: 'type should be more than 2 characters',
      });
    }

    if (name === '' || name === undefined) {
      errors.push({
        param: 'name',
        message: 'name is required and must be more than 2 characters',
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

export default OfficeValidator;
