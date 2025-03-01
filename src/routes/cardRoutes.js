const express = require('express');
const { getCards } = require('../controllers/CardController');

const router = express.Router();

router.get('/', getCards);

module.exports = router;