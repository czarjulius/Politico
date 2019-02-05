/* eslint-disable no-restricted-globals */
import jwt from 'jsonwebtoken';
import db from '../db/database';


const auth = {
  authenticate(user) {
    return jwt.sign({
      id: user.id,
      email: user.email,
    }, process.env.PRIVATE_KEY, {
      expiresIn: '48h',
    });
  },

  verifyToken(token) {
    let decoded = {};
    try {
      decoded.payload = jwt.verify(token, process.env.PRIVATE_KEY);
    } catch (error) {
      decoded = {
        error: error.message,
      };
    }
    return decoded;
  },

  verifyUserToken(req, res, next) {
    const token = req.headers['x-access-token'];
    if (!token) {
      return res.status(401).json({ error: 'No token provided.' });
    }
    const decoded = auth.verifyToken(token);
    if (decoded.error) {
      return res.status(500).json({ error: 'Failed to authenticate token.' });
    }
    const query = {
      text: 'select * from users where id = $1 LIMIT 1', values: [decoded.payload.id],
    };
    // if (req.params.id && isNaN(parseInt(req.params.id, 10))) {
    //   return res.status(400).json({ error: 'The id provided must be an integer' });
    // }
    return db.query(query, (error2, response) => {
      if (error2) {
        return res.status(400).json({ error: 'Something went wrong with the process, Please try later' });
      }
      if (response.rows.length > 0) {
        req.decoded = decoded.payload;
        next();
      } else { return res.status(404).json({ error: 'User not found' }); }
    });
  },
};

export default auth;
