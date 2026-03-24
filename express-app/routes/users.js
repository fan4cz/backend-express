const express = require('express');
const router = express.Router();

const users = [
  { id: 1, name: "Скворок Артем" },
  { id: 2, name: "Мальгин Иван" }
];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({ items: users });
});


router.post('/', function(req, res, next) {
  const newUser = {
    id: users.length + 1,
    name: req.body.name
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

module.exports = router;
