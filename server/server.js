const express = require('express');
const bodyParser = require('body-parser')

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true, useNewUrlParser: true}));
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next()
});

// initialize routes
app.use('/api',require('./Routes/apiRoutes.js'));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}!!`);
});
