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

router.get('/:id', function(req, res, next) {
  const userId = parseInt(req.params.id);
  const user = users.find(u => u.id === userId);
  
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  
  res.json(user);
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