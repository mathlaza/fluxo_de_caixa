require('dotenv').config({ path: `${__dirname}/./../../.env` });

const app = require('./app');

const port = process.env.API_PORT || 3000;

app.get('/', (_request, response) => {
  response.send();
});

app.listen(port, () => console.log('server running on port', port));
