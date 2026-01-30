import sqlite3 from "sqlite3";

const db = new sqlite3.Database("learners.db");

db.run(`
  CREATE TABLE IF NOT EXISTS learners (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT,
    status TEXT
  )
`);

export default db;
