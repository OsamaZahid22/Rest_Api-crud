const { Pool } = require("pg");

exports.connect = async (query, params) => {
  let data = [];
  const client = new Pool({
    user: "Admin",
    host: "23.97.138.116",
    database: "postgres",
    password: "AvanzaPG12345!",
    port: 7450,
  });
  try {
    data = await client.query(query, params);
  } catch (error) {
    console.log("error", error);
  } finally {
    await client.end();
    return data;
  }
};
