const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const helmet = require('helmet');
const sql = require('./config/sequelize');

console.log('App is starting...');

sql.connection.sync().then(() => {
  console.log('Connected and synchronized successfully!');
}).catch((err) => {
  console.log(err);
});

app.set('trust proxy', 1);
app.set('port', process.env.PORT || 3000);
app.disable('x-powered-by');
app.use(bodyParser.json());
app.use(helmet());

app.get('/ping', async (req, res) => res.json({
  msg: 'pong',
}));

app.use(require('./routes/boards'));

app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }

  if (err) {
    console.error(err);
    return res.sendStatus(500);
  }
});

app.listen(app.get('port'), () => {
  console.info(`App is listening on port: ${app.get('port')}`);
});
