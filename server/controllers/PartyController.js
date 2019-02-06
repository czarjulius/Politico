import db from '../db/database';


class PartyController {
  static getParty(req, res) {
    const partyId = req.params.id;
    const query = `SELECT * from party where id ='${partyId}'`;
    return db.query(query).then((data) => {
      if (data.rowCount >= 1) {
        res.status(200).json({
          success: true,
          message: 'Party fetched successfully',
          data: data.rows,
        });
      }
      res.status(404).json({
        success: false,
        message: 'Yet to create an party',
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
      res.status(201).json({
        success: true,
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
      res.status(200).json({
        success: true,
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
      res.status(200).json({
        success: true,
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
      res.status(203).json({
        success: true,
        message: 'party deleted successfully',
      });
    }).catch(error => res.status(500).json({
      success: false,
      message: 'internal server error',
      error: error.message,
    }));
  }
}

export default PartyController;
