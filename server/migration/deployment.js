import winston from 'winston';
import pool from '../db/database';

const GenerateUserTable = `
CREATE TABLE IF NOT EXISTS users (
 userId serial PRIMARY KEY,
 email VARCHAR (255) NOT NULL UNIQUE,
 firstName VARCHAR (255) NOT NULL,
 lastName VARCHAR (255) NOT NULL,
 otherName VARCHAR (255)  NULL,
 phoneNumber VARCHAR (255) NOT NULL,
 passportUrl VARCHAR (255) NOT NULL,
 password VARCHAR (255) NOT NULL,
 isAdmin boolean DEFAULT false,
 regDate date NOT NULL DEFAULT CURRENT_DATE
);
`;

const user = [GenerateUserTable];
user.map(text => pool.query(text)
  .then()
  .catch(error => winston(error.message)));
