const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/errbnb', { useNewUrlParser: true });
const connect = mongoose.connection;
connect.on('error', console.error.bind(console, 'connection error:'));
connect.once('open', () => { console.log('Connected To Mongo Database') });

const listingSchema = mongoose.Schema({
  _id: String,
  photo: [{
    url: String,
    caption: String
  }]
});

const Listing = mongoose.model('Listing', listingSchema);

const getPhotosById = (id, callback) => {
  Listing.findOne({_id: id}, callback)
};

module.exports = {
    Listing,
    getPhotosById,
    connect,
};