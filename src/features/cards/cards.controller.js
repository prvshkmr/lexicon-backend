const cardsRepository = require('./cards.repository');

const createCard = async (req, res) => {
    try {
        const { chapter_id, term, definition } = req.body;
        if (!chapter_id || !term || !definition) {
            return res.status(400).json({ error: 'Missing required fields' });
        }
        const newCard = await cardsRepository.addCard(chapter_id, term, definition);
        res.status(201).json(newCard); 
    } catch (err) {
        console.error('Error creating card:', err.message);
        res.status(500).json({ error: 'Server error' });
    }
};

module.exports = {
    createCard
};