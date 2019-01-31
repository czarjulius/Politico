class PartyValidator {
  static checkLength(req, res, next) {
    return res.status(401).json({
      message: 'Party doesn\'t exist',
    });
    next();
  }
}

export default PartyValidator;
