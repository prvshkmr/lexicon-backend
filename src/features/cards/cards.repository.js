const db = require('../../config/db');

const addCard = async (chapterId, term, definition) => {
    const query = `
        INSERT INTO cards (chapter_id, term, definition) 
        VALUES ($1, $2, $3) 
        RETURNING *;
    `;
    const values = [chapterId, term, definition];
    
    const result = await db.query(query, values);
    return result.rows[0]; 
};

module.exports = {
    addCard
};