import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import db from '../db/database';
import auth from '../middlewares/jwtAuth';
import confirmPassword from '../helper/confirmPassword';

dotenv.config();

class AuthUsersController {
  static registerUser(req, res) {
    const {
      firstName, lastName, otherName, phoneNumber, passportUrl, email, password,
    } = req.body;
    const queryEmail = {
      text: 'SELECT * FROM users WHERE email = $1 LIMIT 1',
      values: [email],
    };
    db.query(queryEmail)
      .then((result) => {
        if (result.rows.length > 0) {
          return res.status(409).json({
            success: false,
            message: 'email already exists',
          });
        }
        const hashedPassword = bcrypt.hashSync(password, 10);
        const query = {
          text: 'INSERT INTO users(email, firstName, lastName, otherName, phoneNumber, passportUrl, password) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING userid, email, firstName, lastName,othername,phoneNumber,passportUrl ',
          values: [email, firstName, lastName, otherName, phoneNumber, passportUrl, hashedPassword],
        };
        db.query(query)
          .then((data) => {
            const userToken = auth.authenticate(data.rows[0]);
            return res.status(201).json({
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

  static userLogin(req, res) {
    const { email, password } = req.body;
    const query = {
      text: 'SELECT * FROM users where email = $1',
      values: [email],
    };
    db.query(query)
      .then((data) => {
        if (data.rows.length > 0) {
          const checker = confirmPassword.isValidPassword(data.rows[0].password, password);
          if (checker) {
            delete data.rows[0].password;
            const token = auth.authenticate(data.rows[0]);
            return res.status(200).json({
              success: true,
              message: 'login successful',
              data: data.rows[0],
              token,
            });
          }
        }
        return res.status(404).json({
          success: false,
          message: 'incorrect email or password',
        });
      }).catch(error => res.status(500).json({
        success: false,
        message: 'internal server error',
        error: error.message,
      }));
  }
}

export default AuthUsersController;
