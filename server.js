const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

const API_KEY = process.env.NEWS_API_KEY;
const BASE_URL = 'https://newsapi.org/v2';

app.get('/api/news', async (req, res) => {
    try {
        const { category, pageSize, page } = req.query;
        const response = await axios.get(`${BASE_URL}/top-headlines`, {
            params: {
                category,
                pageSize,
                page,
                apiKey: API_KEY
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching news' });
    }
});

app.get('/api/search', async (req, res) => {
    try {
        const { q, pageSize, page } = req.query;
        const response = await axios.get(`${BASE_URL}/everything`, {
            params: {
                q,
                pageSize,
                page,
                apiKey: API_KEY
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while searching news' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
