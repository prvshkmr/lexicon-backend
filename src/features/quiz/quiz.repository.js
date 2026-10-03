const db = require('../../config/db');

const getCardsByChapter = async (chapterId) => {
    const query = 'SELECT * FROM cards WHERE chapter_id = $1;';
    const values = [chapterId];
    
    const result = await db.query(query, values);
    return result.rows; // Returns an array of matching cards
};

module.exports = {
    getCardsByChapter
};