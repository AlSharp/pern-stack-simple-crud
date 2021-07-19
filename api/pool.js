const Pool = require('pg').Pool;

module.exports = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'api',
  password: 'postgres2906',
  port: 5432
});