// server.js

const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to SQLite database (or create if not exists)
const db = new sqlite3.Database('./quotes.db', (err) => {
  if (err) {
    console.error('Error connecting to database:', err.message);
  } else {
    console.log('Connected to the database.');
    // Create table if not exists
    db.run(`CREATE TABLE IF NOT EXISTS quotes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      author TEXT,
      quote TEXT
    )`);
  }
});

// Serve static files (HTML, CSS, JS)
app.use(express.static('public'));

// Get a random quote
app.get('/api/quote', (req, res) => {
  db.get(`SELECT * FROM quotes ORDER BY RANDOM() LIMIT 1`, (err, row) => {
    if (err) {
      console.error('Error retrieving quote:', err.message);
      res.status(500).json({ error: 'Failed to retrieve quote' });
    } else {
      res.json(row);
    }
  });
});

// Search quotes by author
app.get('/api/quotes/:author', (req, res) => {
  const author = req.params.author;
  db.all(`SELECT * FROM quotes WHERE author LIKE '%${author}%'`, (err, rows) => {
    if (err) {
      console.error('Error searching quotes:', err.message);
      res.status(500).json({ error: 'Failed to search quotes' });
    } else {
      res.json(rows);
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
