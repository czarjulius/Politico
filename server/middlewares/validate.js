import dotenv from 'dotenv';
import checkEmail from '../helper/helper';

dotenv.config();

const validation = {
  validateRegistrationEntry(request, response, next) {
    const required = ['email', 'password', 'firstName', 'lastName', 'phoneNumber', 'confirmPassword'];
    const collection = request.body;
    let isValid = true;
    const errors = {};
    for (let i = 0; i < required.length; i += 1) {
      if (!collection[required[i]]) {
        isValid = false;
        errors[required[i]] = `please provide ${required[i]}`;
      }
    }
    if (collection.email) {
      if ((checkEmail.isEmail(collection.email) === false)) {
        isValid = false;
        errors.email = 'please provide a valid email address';
      }
    }
    if (collection.password && !collection.password.replace(/\s/g, '').length) {
      errors.password = 'Please enter a valid password';
      isValid = false;
    }
    if (collection.firstName && !collection.firstName.replace(/\s/g, '').length) {
      errors.firstName = 'Please enter a valid name';
      isValid = false;
    }
    if (collection.lastName && !collection.lastName.replace(/\s/g, '').length) {
      errors.lastName = 'Please enter a valid name';
      isValid = false;
    }
    if (collection.phoneNumber && !collection.phoneNumber.replace(/\s/g, '').length) {
      errors.phoneNumber = 'Please enter a valid phonenumber';
      isValid = false;
    }
    if (collection.confirmPassword && !collection.confirmPassword.replace(/\s/g, '').length) {
      errors.confirmPassword = 'Please enter a valid phonenumber';
      isValid = false;
    }
    if (collection.password.toString().trim() !== collection.confirmPassword.toString().trim()) {
      errors.confirmPassword = 'password does not match';
      isValid = false;
    }
    if (isValid) {
      request.body.password = collection.password.trim();
      request.body.firstName = collection.firstName.trim();
      request.body.lastName = collection.lastName.trim();
      request.body.email = collection.email.trim();
      request.body.phoneNumber = collection.phoneNumber.trim();
      return next();
    }
    return response.status(400).json({
      success: false,
      errors,
    });
  },
};
export default validation;
