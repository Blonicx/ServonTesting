const express = require('express');
const app = express();
const path = require('path');

const api = require('./api/api-Entry')

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('api', api)

app.get('/', (res, req) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});