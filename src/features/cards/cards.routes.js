const express = require('express');
const router = express.Router();
const cardsController = require('./cards.controller');

router.post('/', cardsController.createCard);

module.exports = router;