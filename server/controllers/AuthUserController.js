import client from '../models/database';

class AuthUsersController {
  static registerUser(req, res) {
    const {
      firstname, lastname, othername, phonenumber, passporturl, isadmin, email, 
    } = req.body;
    const query = {
      text: 'INSERT INTO users(email, firstname, lastname, othername, phonenumber, passporturl, isadmin) VALUES($1, $2, $3, $4, $5,$6,$7) RETURNING userid, email, firstName, lastName,othername,phoneNumber,passportUrl ',
      values: [email, firstname, lastname, othername, phonenumber, passporturl, isadmin],
    };
    client.query(query)
      .then(data => res.status(201).json({
        success: true,
        message: 'user registration was successful',
        firstName: data.rows[0].firstname,
        data: data.rows[0],
      }))
      .catch(error => res.status(500).json({ message: error.message }));
  }
}
export default AuthUsersController;

