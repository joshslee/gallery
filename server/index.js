const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 1337;
const model = require('../db/index');

app.use('/rooms/:id', express.static('./client/dist'));
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.get('/rooms/:id/photos', (req, res) => {
  var id = req.params.id;
  model.getPhotosById(id, (err, response) => {
    if (err) {
      res.status(500).send();
    } else {
      res.send(response);
    }
  });
});

app.listen(PORT, () => {
  console.log(`server listening on port, ${PORT}`);
});