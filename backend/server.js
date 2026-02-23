const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Basic routes
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the API' });
});

app.get('/api/data', (req, res) => {
  res.json({ 
    data: [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' }
    ]
  });
});

app.post('/api/data', (req, res) => {
  const { name } = req.body;
  res.json({ 
    message: 'Data received',
    data: { id: Date.now(), name }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
