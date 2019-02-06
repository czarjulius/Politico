import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
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

  static userLogin(req, res) {
    const { email, password } = req.body;
    db.query({ text: 'SELECT * FROM users where email = $1', values: [email] }).then((data) => {
      if (data.rowCount === 1) {
        const checker = confirmPassword.isValidPassword(data.rows[0].password, password);
        if (checker) {
          delete data.rows[0].password;
          jwt.sign({ data: data.rows[0].userid }, 'secretKey', (err, token) => res.json({
            success: true,
            message: 'user successfully login',
            firstName: data.rows[0].firstname,
            user: data.rows,
            token,
          }))
            .catch(error => res.status(500).json({ message: error.message }));
        }
      }
      res.status(400).json({
        success: false,
        message: 'Your email or password is incorrect',
      });
      return null;
    });
  }
}
export default AuthUsersController;
