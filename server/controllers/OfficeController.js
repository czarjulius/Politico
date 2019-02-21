import db from '../db/database';

class OfficeController {
  static postOffice(req, res) {
    const { type, name } = req.body;
    const query = {
      text: 'INSERT into office (type, name) VALUES ($1, $2) returning *',
      values: [type, name],
    };
    db.query(query).then((data) => {
      res.status(201).json({
        status: 201,
        message: 'Office created successfully',
        data: data.rows,
      });
    }).catch(error => res.status(500).json({
      message: 'internal server error',
      error: error.message,
    }));
  }

  static getOffice(req, res) {
    const officeId = req.params.id;
    const query = `SELECT * from office where id ='${officeId}'`;
    return db.query(query).then((data) => {
      if (data.rowCount >= 1) {
        res.status(200).json({
          status: 200,
          message: 'Office fetched successfully',
          data: data.rows,
        });
      }
      res.status(404).json({
        status: 404,
        message: 'Yet to create an Office',
      });
    })
      .catch(error => res.status(500).send('Internal server error', error.message));
  }

  static getOffices(req, res) {
    const query = {
      text: 'SELECT * FROM office',
    };
    db.query(query).then((data) => {
      res.status(200).json({
        status: 200,
        message: 'offices retrieved successfully',
        data: data.rows,
      });
    }).catch(error => res.status(500).json({
      status: 500,
      message: 'internal server error',
      data: error.message,
    }));
  }
}

export default OfficeController;
