const express = require('express');
const db = require('./src/config/db');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Lexicon Backend is running!');
});

app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
    try {
        const res = await db.query('SELECT NOW()');
        console.log('Connected to the database', res.rows[0].now);
    } catch (err) {
        console.error('Database connection error:', err.message);
    }
});