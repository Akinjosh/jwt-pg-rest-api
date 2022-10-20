const Pool = require("pg").Pool;

const pool = new Pool({
  host: "localhost",
  user: "Akinyinka",
  password: "kthl8822",
  port: 5432,
  database: "authtodo",
});

module.exports = pool;
