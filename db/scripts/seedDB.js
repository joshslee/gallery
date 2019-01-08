const mongoose = require('mongoose');
const faker = require('faker');
const db = require('../index.js');
let count = 0;

const listingGenerator = function() {
  // bali
  var photoArr = [];
  for (var i = 1; i < 28; i++) {
    photoArr.push({url: `http://d13grdp3a2v9nw.cloudfront.net/bali/bali${i}.jpg`, caption:faker.lorem.sentence()});
    var arr = photoArr.map(el => el);
  }
  var listing = new db.Listing ({_id: count, photo: arr});
  listing.save(response => {
    db.connect.close();
  });
  count++;
  //artisan
  photoArr = [];
  for (var i = 0; i < 16; i++) {
    photoArr.push({url: `http://d13grdp3a2v9nw.cloudfront.net/artisan/art${i}.jpg`, caption:faker.lorem.sentence()});
    var arr = photoArr.map(el => el);
  }
  var listing = new db.Listing ({_id: count, photo: arr});
  listing.save(response => {
    db.connect.close();
  });
  count++;
  //cabana
  photoArr = [];
  for (var i = 0; i < 11; i++) {
    photoArr.push({url: `http://d13grdp3a2v9nw.cloudfront.net/cabana/cabana${i}.jpg`, caption:faker.lorem.sentence()});
    var arr = photoArr.map(el => el);
  }
  var listing = new db.Listing ({_id: count, photo: arr});
  listing.save(response => {
    db.connect.close();
  });
  count++;
  //corner
  photoArr = [];
  for (var i = 0; i < 13; i++) {
    photoArr.push({url: `http://d13grdp3a2v9nw.cloudfront.net/corner/corner${i}.jpg`, caption:faker.lorem.sentence()});
    var arr = photoArr.map(el => el);
  }
  var listing = new db.Listing ({_id: count, photo: arr});
  listing.save(response => {
    db.connect.close();
  });
  count++;
  //grey
  photoArr = [];
  for (var i = 0; i < 13; i++) {
    photoArr.push({url: `http://d13grdp3a2v9nw.cloudfront.net/grey/grey${i}.jpg`, caption:faker.lorem.sentence()});
    var arr = photoArr.map(el => el);
  }
  var listing = new db.Listing ({_id: count, photo: arr});
  listing.save(response => {
    db.connect.close();
  });
  count++;
  //iceland
  photoArr = [];
  for (var i = 0; i < 15; i++) {
    photoArr.push({url: `http://d13grdp3a2v9nw.cloudfront.net/iceland/iceland${i}.jpg`, caption:faker.lorem.sentence()});
    var arr = photoArr.map(el => el);
  }
  var listing = new db.Listing ({_id: count, photo: arr});
  listing.save(response => {
    db.connect.close();
  });
  count++;
  //luxury
  photoArr = [];
  for (var i = 0; i < 17; i++) {
    photoArr.push({url: `http://d13grdp3a2v9nw.cloudfront.net/luxury/luxury${i}.jpg`, caption:faker.lorem.sentence()});
    var arr = photoArr.map(el => el);
  }
  var listing = new db.Listing ({_id: count, photo: arr});
  listing.save(response => {
    db.connect.close();
  });
  count++;
  //nautica
  photoArr = [];
  for (var i = 0; i < 16; i++) {
    photoArr.push({url: `http://d13grdp3a2v9nw.cloudfront.net/nautica/nautica${i}.jpg`, caption:faker.lorem.sentence()});
    var arr = photoArr.map(el => el);
  }
  var listing = new db.Listing ({_id: count, photo: arr});
  listing.save(response => {
    db.connect.close();
  });
  count++;
  //outdoor
  photoArr = [];
  for (var i = 0; i < 19; i++) {
    photoArr.push({url: `http://d13grdp3a2v9nw.cloudfront.net/outdoor/outdoor${i}.jpg`, caption:faker.lorem.sentence()});
    var arr = photoArr.map(el => el);
  }
  var listing = new db.Listing ({_id: count, photo: arr});
  listing.save(response => {
    db.connect.close();
  });
  count++;
  //relax
  photoArr = [];
  for (var i = 0; i < 13; i++) {
    photoArr.push({url: `http://d13grdp3a2v9nw.cloudfront.net/relax/relax${i}.jpg`, caption:faker.lorem.sentence()});
    var arr = photoArr.map(el => el);
  }
  var listing = new db.Listing ({_id: count, photo: arr});
  listing.save(response => {
    db.connect.close();
  });
  count++;
  //sunny
  photoArr = [];
  for (var i = 0; i < 24; i++) {
    photoArr.push({url: `http://d13grdp3a2v9nw.cloudfront.net/sunny/sunny${i}.jpg`, caption:faker.lorem.sentence()});
    var arr = photoArr.map(el => el);
  }
  var listing = new db.Listing ({_id: count, photo: arr});
  listing.save(response => {
    db.connect.close();
  });
  count++;
  //terrace
  photoArr = [];
  for (var i = 0; i < 18; i++) {
    photoArr.push({url: `http://d13grdp3a2v9nw.cloudfront.net/terrace/terrace${i}.jpg`, caption:faker.lorem.sentence()});
    var arr = photoArr.map(el => el);
  }
  var listing = new db.Listing ({_id: count, photo: arr});
  listing.save(response => {
    db.connect.close();
  });
  count++;
  //theatre
  photoArr = [];
  for (var i = 0; i < 14; i++) {
    photoArr.push({url:`http://d13grdp3a2v9nw.cloudfront.net/theatre/theatre${i}.jpg`,caption: faker.lorem.sentence()});
    var arr = photoArr.map(el => el);
  }
  var listing = new db.Listing ({_id: count, photo: arr});
  listing.save(response => {
    db.connect.close();
  });
  count++;
  //treehouse
  photoArr = [];
  for (var i = 0; i < 34; i++) {
    photoArr.push({url:`http://d13grdp3a2v9nw.cloudfront.net/treehouse/treehouse${i}.jpg`,caption: faker.lorem.sentence()});
    var arr = photoArr.map(el => el);
  }
  var listing = new db.Listing ({_id: count, photo: arr});
  listing.save(response => {
    db.connect.close();
  });
  count++;
  //villa
  photoArr = [];
  for (var i = 0; i < 14; i++) {
    photoArr.push({url:`http://d13grdp3a2v9nw.cloudfront.net/villa/villa${i}.jpg`, caption:faker.lorem.sentence()});
    var arr = photoArr.map(el => el);
  }
  var listing = new db.Listing ({_id: count, photo: arr});
  listing.save(response => {
    db.connect.close();
  });
  count++;
  //winter
  photoArr = [];
  for (var i = 0; i < 25; i++) {
    photoArr.push({url:`http://d13grdp3a2v9nw.cloudfront.net/winter/winter${i}.jpg`, caption:faker.lorem.sentence()});
    var arr = photoArr.map(el => el);
  }
  var listing = new db.Listing ({_id: count, photo: arr});
  listing.save(response => {
    db.connect.close();
  });
  count++;
};

const seedDB = () => {
  console.log('seeding started');
  for (let i = 0; i < 8; i++) {
    listingGenerator();
  }
  console.log('seeding finished');
};

seedDB();