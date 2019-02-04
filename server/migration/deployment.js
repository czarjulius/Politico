// import pool from '../models/database';
// import winston from 'winston';

const winston = require('winston');
const pool = require('../models/database');

const GenerateUserTable = `
DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users (
 userId serial PRIMARY KEY,
 email VARCHAR (50) NOT NULL UNIQUE,
 firstName VARCHAR (50) NOT NULL,
 lastName VARCHAR (50) NOT NULL,
 othername VARCHAR (50)  NULL,
 phoneNumber VARCHAR (50) NOT NULL,
 passportUrl VARCHAR (50) NOT NULL,
 isAdmin boolean  NOT NULL,
 regDate date NOT NULL DEFAULT CURRENT_DATE
);
`;
const me = GenerateUserTable;

pool.query(me)
  .then(() => process.exit())
  .catch(error => winston.log(error));
