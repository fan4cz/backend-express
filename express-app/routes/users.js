const express = require("express");
const router = express.Router();
<<<<<<< Updated upstream
const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("mydb.db");
=======

const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('mydb.db');
db.run(`CREATE TABLE IF NOT EXISTS users (
   id INTEGER PRIMARY KEY AUTOINCREMENT,
   name text)`); 

const users = [
  { id: 1, name: "Скворок Артем" },
  { id: 2, name: "Мальгин Иван" }
];
>>>>>>> Stashed changes

/* GET users listing. */
router.get("/", function (req, res, next) {
  db.all("SELECT id, name FROM users", [], (err, rows) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ items: rows });
    }
  });
});

<<<<<<< Updated upstream
router.get("/:id", function (req, res, next) {
=======
router.get('/:id', function(req, res, next) {
  const { id } = req.params;

>>>>>>> Stashed changes
  db.all("SELECT id, name FROM users WHERE id = ?", [id], (err, rows) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ items: rows });
    }
<<<<<<< Updated upstream
  });

  res.json(user);
=======
  });  
>>>>>>> Stashed changes
});

router.post("/", function (req, res, next) {
  const name = req.body.name;
  const insert = "INSERT INTO users (name) VALUES (?)";

  db.run(insert, [name], function (err) {
    if (err) {
      console.log(err);
    }
    res.status(201).json({ id: this.lastID, name });
  });
});

module.exports = router;
