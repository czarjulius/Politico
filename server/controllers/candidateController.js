import db from '../db/database';

class confirmCandidate {
  static patchInterest(req, res) {
    const { userId } = req.params;
    const { officeId, partyId, manifesto, isApproved } = req.body;
    const query = {
      text: 'UPDATE interest SET officeId = $1, partyId = $2, manifesto = $3, isApproved = $4 WHERE userId = $5 returning *',
      values: [officeId, partyId, manifesto, isApproved, userId],
    };
    db.query(query).then((data) => {
      res.status(200).json({
        status: 200,
        message: 'Candidate approved successfully',
        data: data.rows[0],
      });
    }).catch(error => res.status(500).json({
      status: 500,
      message: 'internal server error',
      error: error.message,
    }));
  }
}

export default confirmCandidate;
