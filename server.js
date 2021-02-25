const express = require('express'),
  path = require('path'),
  cors = require('cors'),
  multer = require('multer'),
  bodyParser = require('body-parser');
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');


// File upload settings  
const PATH = './uploads';

let storage = multer.diskStorage({
destination: (req, file, cb) => {
  cb(null, PATH);
},
filename: (req, file, cb) => {
  cb(null, file.fieldname + '-' + Date.now())
}
});

let upload = multer({
storage: storage
});

// Express settings
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
extended: false
}));

app.get('/api', function (req, res) {
res.end('File catcher');
});

// POST File
app.post('/api/upload', upload.single('image'), function (req, res) {
if (!req.file) {
  console.log("No file is available!");
  return res.send({
    success: false
  });

} else {
  console.log('File is available!');
  return res.send({
    success: true
  })
}
});

app.use((req, res, next) => {
    next(createError(404));
  });
  
  // error handler
  app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
  });

 

mongoose.connect(dbConfig.url2, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});