// src/features/quiz/quiz.routes.js
const express = require('express');
const router = express.Router();
const quizController = require('./quiz.controller');

// The :chapter_id makes this route dynamic
router.get('/:chapter_id', quizController.fetchQuizCards);

module.exports = router;