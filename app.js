const { json } = require('express');
const express = require('express');

const app = express();
app.use(json());

const port = process.env.PORT || 5000;

const main = require('./routes/main');

const db = require('./util/db');

app.use('/api/v1', main);

app.listen(port, () => {
	console.log(`Server started on http://localhost:${port}/api/v1/`);
});
