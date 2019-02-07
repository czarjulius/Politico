import db from '../db/database';


class ElectionResult {
  static checkResult(req, res) {
    const query = {
      text: 'SELECT  office, candidate, COUNT(candidate.) result from vote Groupby (office, candidate)',
      values: [],
    };
  }
}

export default ElectionResult;
