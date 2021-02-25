const express = require('express');
const bodyParser = require('body-parser');
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');
const multer = require('multer');
const cookieParser = require('cookie-parser')
const path = require('path')
const { signIn, welcome } = require('./middleware')
// var upload = multer({ dest: 'uploads/' });
var logger = require('morgan');

// create express app
const app = express();
app.use(bodyParser.json())
app.use(cookieParser())
app.post('/signin', signIn)
app.get('/welcome', welcome)
// const router = require('./routes/post.routes')(app);
// const router = require('./routes/post.route')(app);
mongoose.set('useFindAndModify', false);
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.urlencoded({ extended: false }));
// app.use(express.bodyParser());
// parse requests of content-type - application/json
app.use(logger('dev'));

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to NodeJs Application"});
});

let user = require('./routes/user.routes');
let post = require('./routes/post.routes');
app.use('/',post);
app.use('/',user);


// listen for requests
app.listen(3001, () => {
    console.log("Server is listening on port 3001");
});

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST,  PUT,  DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


        // const storage = multer.diskStorage({
        //     destination: function(req, file, cb){
        //         cb(null, './uploads');
        //     },
        //     filename: function(req, file, cb){
        //         console.log("original name",file.originalname)
        //         // cb(null, new Date().toISOString() + file.originalname +'.jpg')
        //         cb(null, file.originalname);
        //     }
        // })
        // var imageFilter = function (req, file, cb) {
        //     // accept image files only
        //     if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/i)) {
        //         return cb(new Error('Only image files are allowed!'), false);
        //     }
        //     cb(null, true);
        // };
        // var upload = multer({ storage: storage, fileFilter: imageFilter})
        // app.post('/img',upload.single('photo'), (req, res, next) => {
        //     try {
        //          console.log("upload",req.file.originalname);
        //         //  console.log("upload",res);
        //         return res.status(201).json({message: 'File uploded successfully'});
        //     } catch (error) {
        //         console.error(error);
        //     }
        // })
  
      

mongoose.Promise = global.Promise;

// Connecting to the database
// mongoose.connect(dbConfig.url, {
//     useNewUrlParser: true
// }).then(() => {
//     console.log("Successfully connected to the database");    
// }).catch(err => {
//     console.log('Could not connect to the database. Exiting now...', err);
//     process.exit();
// });
mongoose.connect(dbConfig.url2, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});