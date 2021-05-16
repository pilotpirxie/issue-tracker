const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const helmet = require('helmet');
const sql = require('./config/sequelize');

console.log('App is starting...');

sql.connection.sync().then(() => {
  if (process.env.NODE_ENV !== 'test') {
    console.log('Connected and synchronized successfully!');
  }
}).catch((err) => {
  console.log(err);
});

app.set('trust proxy', 1);
app.set('port', process.env.PORT || 3001);
app.disable('x-powered-by');
app.use(bodyParser.json());
app.use(helmet());

app.get('/ping', async (req, res) => res.json({
  msg: 'pong',
}));

app.use(require('./routes/boards'));
app.use(require('./routes/issues'));

app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }

  if (err) {
    console.error(err);
    return res.sendStatus(500);
  }
});

module.exports = app;
