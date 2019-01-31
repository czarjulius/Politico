
class OfficeValidator {
  static checkLength(req, res, next) {
    return res.status(401).json({
      message: 'office doesn\'t exist',
    });
    next();
  }
}

export default OfficeValidator;
