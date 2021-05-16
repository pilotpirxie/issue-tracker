const app = require('./app');

app.listen(app.get('port'), () => {
  console.info(`App is listening on port: ${app.get('port')}`);
});
