// Basic connection
const Pool = require("pg").Pool;

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'alberto900',
    database: 'Veterinaria',
    port: 3000
});
/*
const pool = new Pool({
    host: 'veterinariaedson.cuthwq38p2ql.us-east-2.rds-preview.amazonaws.com',
        
    user: 'adminserver1234',
    password: 'admin1234',
    database: 'Veterinaria',
    port: 3000
});
*/
module.exports = pool;
