import db from '../db/database';

class VoteCotroller {
  static castVote(req, res) {
    const tokenId = req.decoded.id;
    const { candidateId, officeId, vote } = req.body;
    if (parseInt(tokenId, 10)) {
      const queryVote = {
        text: ' SELECT * FROM vote WHERE userId = $1 and officeId = $2 ',
        values: [tokenId, officeId],
      };
      db.query(queryVote)
        .then((data) => {
          if (data.rows.length > 0) {
            return res.status(401).json({
              success: false,
              message: 'This user has already voted for this office',
            });
          }
          const query = {
            text: 'INSERT into vote ( userId, candidateId, officeId, vote ) VALUES ($1, $2, $3, $4) returning *',
            values: [tokenId, candidateId, officeId, vote],
          };
          db.query(query).then((data0) => {
            res.status(201).json({
              success: true,
              message: 'vote casted successfully',
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
}

export default VoteCotroller;
