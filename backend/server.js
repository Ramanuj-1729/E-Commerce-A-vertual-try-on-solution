const { APP_PORT, DB_URL } = require('./config');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const routes = require('./routes');
const app = express();

//DB connection
mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => console.log('DB connected ...'));

global.appRoot = path.resolve(__dirname);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/api/v1', routes);
app.get('/', (req, res) => res.send('Hello World!'));

app.listen(APP_PORT, () => console.log(`Listening on port ${APP_PORT} ...`));