// Basic connection
const Pool = require("pg").Pool;
require("dotenv").config();

/*
const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'alberto900',
    database: 'Veterinaria',
    port: 3000
});

const pool = new Pool({
    host: 'veterinariaedson.cuthwq38p2ql.us-east-2.rds-preview.amazonaws.com',
        
    user: 'adminserver1234',
    password: 'admin1234',
    database: 'Veterinaria',
    port: 3000
});
*/
const devConfig = `postgresql://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`;

const proConfig = process.env.DATABASE_URL; //heroku addons
const pool = new Pool({
  connectionString:
    process.env.NODE_ENV === "production" ? proConfig : devConfig,
});
module.exports = pool;
