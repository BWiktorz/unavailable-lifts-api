var {LiftsCache} = require("../src/lifts-cache.js");
var express = require('express');
var router = express.Router();

var cache = new LiftsCache();

/* GET users listing. */
router.get('/', function(req, res, next) {
  cache.getUnavailableLifts()
      .then((lifts) =>
        res.status(200).send(JSON.stringify(lifts)))
      .catch((e) => res.status(400).send("Error " + e.type + " occurred: " + e.message))
});

module.exports = router;
