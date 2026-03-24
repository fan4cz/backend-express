const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({
    items: [
      {id: 1, name: "Скворок Артем"},
      {id: 2, name: "Мальгин Иван"}
    ]
  });
});

module.exports = router;
