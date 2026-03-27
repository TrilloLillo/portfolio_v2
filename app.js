const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files (index.html, assets folder, etc.) from project root
app.use(express.static(__dirname));

// Explicit root route to ensure GET / returns index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});