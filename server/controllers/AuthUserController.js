import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import Pool from '../db/database';
import auth from '../middlewares/jwtAuth';

dotenv.config();

class AuthUsersController {
  static registerUser(req, res) {
    const {
      firstName, lastName, otherName, phoneNumber, passportUrl, isAdmin, email, password,
    } = req.body;
    const queryEmail = {
      text: 'SELECT * FROM users WHERE email = $1 LIMIT 1',
      values: [email],
    };
    Pool.query(queryEmail)
      .then((result) => {
        if (result.rows.length > 0) {
          return res.status(409).json({
            success: false,
            message: 'email already exists',
          });
        }
        const hashedPassword = bcrypt.hashSync(password, 10);
        const query = {
          text: 'INSERT INTO users(email, firstName, lastName, otherName, phoneNumber, passportUrl, isAdmin, password) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING userid, email, firstName, lastName,othername,phoneNumber,passportUrl ',
          values: [email, firstName, lastName, otherName, phoneNumber, passportUrl, isAdmin, hashedPassword],
        };
        Pool.query(query)
          .then((data) => {
            const userToken = auth.authenticate(data.rows[0]);
            res.status(201).json({
              success: true,
              message: 'user registration was successful',
              firstName: data.rows[0].firstname,
              data: data.rows[0],
              token: userToken,
            });
          })
          .catch(error => res.status(500).json({ message: error.message }));
      });
  }
}
export default AuthUsersController;

