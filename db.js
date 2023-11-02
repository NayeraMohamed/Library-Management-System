const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "LMS",
    password: "password",
    port: 5432
});

module.exports = pool;
