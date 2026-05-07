const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Hello You are on the Server Side');
});
app.post('/', (req, res) => {
  res.status(200).send('You Can Post on the endPoint');
});
const port = 3000;
app.listen(port, () => {
  console.log(`Your application is running on the port ${port}...`);
});
