const pg = require("../database/pg");

exports.create = async (req,res,next) => {
    try {
        let params = []
        const { departmentId,departmentName } = req.body
        params.push(departmentId)
        params.push(departmentName)
        const query = `INSERT INTO department (department_id,department_name) Values($1,$2)`;
        await pg.connect(query, params);
        res.status(200).json({ status: 200, message: 'Department is successfully created'});
      } catch (err) {
        res.status(500).json({ status: 500, message: err});
      }
    }; 

    exports.get = async (req, res, next) => {
      try {
        let params = [];
        const { page, limit } = req.body 
        params.push(page);
        params.push(limit);
        let query = `SELECT * FROM department order by department_id desc offset $1 limit $2`;
        let response = await pg.connect(query, params);
        res.status(200).json({ status: 200, message: 'Department is successfully fetched', data: response.rows});
      } catch (err) {
        res.status(500).json({ status: 500, message: err});
      }
    }

    
exports.getId = async (req, res, next) => {
  try {
    let params = []
    const departmentId = req.query.departmentId;
    params.push(departmentId)
    let query = 'SELECT * FROM employee WHERE employee_id = $1';
    let response = await pg.connect(query, params);
    res.status(200).json({ status: 200, message: 'Department is successfully fetched', data: response.rows});

  } catch (error) {
    res.status(500).json({ status: 500, message: err});
  }
};


