import db from '../db/database';


class PartyController {
  static getParty(req, res) {
    const partyId = req.params.id;
    const query = `SELECT * from party where id ='${partyId}'`;
    db.query(query).then((data) => {
      if (data.rowCount >= 1) {
        return res.status(200).json({
          status: 200,
          message: 'Party fetched successfully',
          data: data.rows,
        });
      }
      return res.status(404).json({
        status: 404,
        message: `Yet to create a party with ID ${partyId}`,
      });
    })
      .catch(error => res.status(500).send('Internal server error', error.message));
  }

  static postParty(req, res) {
    const { name, hqAddress, logoUrl } = req.body;
    const query = {
      text: 'INSERT into party (name, hqAddress, logoUrl) VALUES ($1, $2, $3) returning *',
      values: [name, hqAddress, logoUrl],
    };
    db.query(query).then((data) => {
      return res.status(201).json({
        status: 201,
        message: 'Party created successfully',
        data: data.rows,
      });
    }).catch(error => res.status(500).json({
      message: 'internal server error',
      error: error.message,
    }));
  }

  static patchParty(req, res) {
    const { id } = req.params;
    const { name, hqAddress, logoUrl } = req.body;

    const query = {
      text: 'UPDATE party set name = $1, hqAddress = $2, logoUrl = $3 WHERE id = $4 returning *',
      values: [name, hqAddress, logoUrl, id],
    };

    db.query(query).then((data) => {
      return res.status(200).json({
        status: 200,
        message: 'party updated successfully',
        data: data.rows,
      });
    }).catch(error => res.status(500).json({
      success: false,
      message: 'internal server error',
      error: error.message,
    }));
  }

  static getParties(req, res) {
    const query = {
      text: 'SELECT * FROM party',
    };
    db.query(query).then((data) => {
      return res.status(200).json({
        status: 200,
        message: 'parties retrieved successfully',
        data: data.rows,
      });
    }).catch(error => res.status(500).json({
      success: false,
      message: 'internal server error',
      data: error.message,
    }));
  }

  static deleteParty(req, res) {
    const { id } = req.params;
    const query = {
      text: 'DELETE FROM party WHERE id = $1',
      values: [id],
    };
    db.query(query).then(() => {
      return res.status(203).json({
        status: 203,
        message: 'party deleted successfully',
      });
    }).catch(error => res.status(500).json({
      status: 500,
      message: 'internal server error',
      error: error.message,
    }));
  }
}

export default PartyController;
