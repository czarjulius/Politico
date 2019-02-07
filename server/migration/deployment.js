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
const GeneratePartyTable = `
CREATE TABLE IF NOT EXISTS party (
 id serial PRIMARY KEY,
 name VARCHAR (255) NOT NULL UNIQUE,
 hqAddress VARCHAR (255) NOT NULL,
 logoUrl VARCHAR (255) NOT NULL,
 createdAt date NOT NULL DEFAULT CURRENT_DATE,
 updateedAt date NOT NULL DEFAULT CURRENT_DATE
 
);
`;
const GenerateOfficeTable = `
CREATE TABLE IF NOT EXISTS office (
 id serial PRIMARY KEY,
 type VARCHAR (255) NOT NULL UNIQUE,
 name VARCHAR (255) NOT NULL,
 createdAt date NOT NULL DEFAULT CURRENT_DATE,
 updateedAt date NOT NULL DEFAULT CURRENT_DATE
 
);
`;
const GenerateInterestTable = `
CREATE TABLE IF NOT EXISTS interest (
 id serial PRIMARY KEY,
 userId INTEGER REFERENCES users (userId) ON DELETE CASCADE,
 officeId INTEGER REFERENCES office (id) ON DELETE CASCADE,
 partyId INTEGER REFERENCES party (id) ON DELETE CASCADE,
 manifesto TEXT,
 isApproved boolean DEFAULT false,
 createdAt date NOT NULL DEFAULT CURRENT_DATE,
 updateedAt date DEFAULT CURRENT_DATE
 
);
`;

const GenerateVoteTable = `
CREATE TABLE IF NOT EXISTS vote (
 id serial PRIMARY KEY,
 userId INTEGER REFERENCES users (userId) ON DELETE CASCADE,
 officeId INTEGER REFERENCES office (id) ON DELETE CASCADE,
 candidateId INTEGER REFERENCES interest (id) ON DELETE CASCADE,
 vote INTEGER,
 createdAt date NOT NULL DEFAULT CURRENT_DATE
);
`;

const user = [GenerateUserTable, GeneratePartyTable, GenerateOfficeTable, GenerateInterestTable, GenerateVoteTable];
user.map(text => pool.query(text)
  .then()
  .catch(error => console.log(error.message)));
