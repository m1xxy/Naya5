const express = require('express');
const app = express();

app.use(express.static(__dirname)); // Serves your index.html

app.get('/api/my-account-info', async (req, res) => {
    try {
        const response = await fetch('https://sports-api.cloudbet.com/pub/v1/account/info', {
            headers: {
                'Content-Type': 'application/json',
                'X-API-Key': process.env.CLOUDBET_API_KEY 
            }
        });
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
