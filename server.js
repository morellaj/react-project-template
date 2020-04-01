const express = require('express');
const helmet = require('helmet');
const path = require('path');

const app = express();
app.use(helmet());

app.use('/', express.static(path.join(__dirname, 'dist')));


app.get('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, 'dist', 'index.html'), (err) => {
    if (err) {
      response.status(500).send(err);
    }
  });
});


const listener = app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(listener.address().port);
});
