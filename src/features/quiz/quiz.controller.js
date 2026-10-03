// src/features/quiz/quiz.controller.js
const quizRepository = require('./quiz.repository');

const fetchQuizCards = async (req, res) => {
    try {
        // Extract the chapter ID directly from the URL (e.g., /api/quiz/1)
        const chapterId = req.params.chapter_id;

        const cards = await quizRepository.getCardsByChapter(chapterId);
        
        // Even if the array is empty, we send a 200 OK status
        res.status(200).json(cards); 
    } catch (err) {
        console.error('Error fetching quiz cards:', err.message);
        res.status(500).json({ error: 'Server error' });
    }
};

module.exports = {
    fetchQuizCards
};