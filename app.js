const express = require('express');
const itemRoutes = require('./routes/itemRoutes');

const app = express();

app.use(express.json());
app.use('/items', itemRoutes);

app.listen(3000, () => {
  console.log('Server started on port 3000');
  console.log('http://localhost:3000');
});

module.exports = app;