import db from '../db/database';

export default class InterestController {
  static declareInterest(req, res) {
    const { userId } = req.params;
    const tokenId = req.decoded.id;
    if (parseInt(userId, 10) === parseInt(tokenId, 10)) {
      const queryInterest = {
        text: ' SELECT * FROM interest WHERE userid = $1',
        values: [userId],
      };
      db.query(queryInterest)
        .then((data) => {
          if (data.rows.length > 0) {
            return res.status(401).json({
              success: false,
              message: 'user already declared interest',
            });
          }
          const { officeId, partyId, manifesto } = req.body;
          const query = {
            text: 'INSERT into interest (userId, officeId, partyId, manifesto) VALUES ($1, $2, $3, $4) returning *',
            values: [userId, officeId, partyId, manifesto],
          };
          db.query(query).then((data0) => {
            res.status(201).json({
              success: true,
              message: 'Interest declared successfully',
              data: data0.rows,
            });
          }).catch(error => res.status(500).json({
            message: 'internal server error',
            error: error.message,
          }));
        }).catch(error => res.status(500).json({
          success: false,
          message: 'internal server error',
          error: error.message,
        }));
    }
  }

  static patchInterest(req, res) {
    const { id } = req.params;
    const { isApproved} = req.body;
    const query = {
      text: 'UPDATE interest set isApproved = $1 WHERE id = $2 returning *',
      values: [isApproved, id],
    };
    db.query(query).then((data) => {
      res.status(200).json({
        success: true,
        message: 'Interest Aprroved successfully',
        data: data.rows,
      });
    }).catch(error => res.status(500).json({
      success: false,
      message: 'internal server error',
      error: error.message,
    }));
  }
}

/*
`
- decode token from route
- check if token is same as params
- if same get details from user table
  - check if user already exists on the interest table
      - if no register
    else throw error
  else throw error
`
*/
