const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8080;
const model = require('../db/index');

app.use('/rooms/:id', express.static('./client/dist'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/api/rooms/:id/photos', (req, res) => {
  model.getPhotosById(req.params.id, (err, { photo }) => {
    err ? res.status(500).send() : res.status(200).send(photo)
  });
});

app.listen(port, () => {
  console.log(`Server listening on port, ${port}`);
});