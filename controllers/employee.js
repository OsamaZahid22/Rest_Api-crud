const pg = require("../database/pg");

exports.create = async (req, res, next) => {
  try {
    let params = [];
    const { employeeId, firstName, lastName, departmentId } = req.body;
    params.push(employeeId);
    params.push(firstName);
    params.push(lastName);
    params.push(departmentId);

    const query = `INSERT INTO employee (employee_id, first_name, last_name,department_id) Values($1,$2,$3,$4)`;
    await pg.connect(query, params);
    res.status(200).json({ status: 200, message: 'Employee is successfully created'});
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
    let query = `SELECT * FROM employee order by employee_id desc offset $1 limit $2`;
    let response = await pg.connect(query, params);
    res.status(200).json({ status: 200, message: 'Employee is successfully fetched', data: response.rows});
  } catch (err) {
    res.status(500).json({ status: 500, message: err});
  }
};

exports.getId = async (req, res, next) => {
  try {
    let params = []
    const employeeId = req.query.employeeId;
    params.push(employeeId)
    let query = 'SELECT * FROM employee WHERE employee_id = $1';
    let response = await pg.connect(query, params);
    res.status(200).json({ status: 200, message: 'Employee is successfully fetched', data: response.rows});

  } catch (error) {
    res.status(500).json({ status: 500, message: err});
  }
}
  
  