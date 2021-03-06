const app = require('express')();
const server = require('http').createServer(app);
const bodyParser = require('body-parser');
const cors = require('cors');

const api = require('./users');
const pool = require('./pool');

app.use(cors());

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

server.listen(5000, async () => {
  try {
    await pool.connect();
    app.use('/api', api(pool));
    console.log('Server listens to port 5000');
  }
  catch(error) {
    console.log(error);
  }
});


