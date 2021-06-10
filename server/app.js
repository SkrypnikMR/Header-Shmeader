require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const account = require('./routes/account');
const PORT = process.env.PORT || 1000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/api/account', account);

app.listen(PORT, () => console.log(`app start on port:${PORT}`));
