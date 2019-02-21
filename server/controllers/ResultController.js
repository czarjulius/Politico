import db from '../db/database';

class ResultController {
  static getResult(req, res) {
    const { officeId } = req.params;
    const query = {
      text: `SELECT officeId, candidateId, 
      COUNT(candidateId) AS result
       FROM votes WHERE officeId=$1 
       GROUP BY candidateId, officeId`,
      values: [officeId],
    };
    db.query(query).then((data) => {
      if (data.rowCount >= 1) {
        return res.status(200).json({
          status: 200,
          message: 'result retrieved successfully',
          data: data.rows,
        });
      }
      return res.status(404).json({
        status: 404,
        error: 'no result for this office yet',
      });
    })
      .catch(error => res.status(500).json({
        status: 500,
        message: 'internal server error',
        data: error.message,
      }));
  }
}


export default ResultController;
