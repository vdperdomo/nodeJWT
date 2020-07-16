import mysql from 'mysql';

const dotenv = require('dotenv');
dotenv.config();

const connection = mysql.createConnection({
  host: process.env.DEV_DB_HOST,
  user: process.env.DEV_DB_USERNAME,
  password: process.env.DEV_DB_PASSWORD,
  database: process.env.DEV_DB_DATABASE,
  insecureAuth: true,
});

export default connection;
