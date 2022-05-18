const sqlite3 = require("sqlite3").verbose();
const fs = require('fs');

fs.open('student.db', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});

const db = new sqlite3.Database("./student.db", sqlite3.OPEN_READWRITE, (err) => {
    if (err) return console.error(err.message);
  
    console.log("connection succesful");
  });
  
db.run('CREATE TABLE students(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, email TEXT UNIQUE NOT NULL, town TEXT NOT NULL, town_id INTEGER NOT NULL, birth_date INTEGER NOT NULL )');

