const path = require('path');
// var upload = multer({ dest: 'uploads/' });
const multer = require('multer');




// const storage = multer.diskStorage({
//     destination: (req, file, callBack) => {
//         callBack(null, 'uploads')
//     },
//     filename: (req, file, callBack) => {
//         callBack(null, `FunOfHeuristic_${file.originalname}`)
//     }
//   })

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        // console.log(file);
        cb(null, Date.now() + path.extname(file.originalname));
    }
    });
    const fileFilter = (req, file, cb) => {
    if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
    }
    function imgUpload(req,res) {
        app.post('/img',upload.single('photo'), (req, res, next) => {
          try {
              console.log("upload",res.originalname);
               return res.status(201).json({
                    
                  message: 'File uploded successfully'
              });
          } catch (error) {
              console.error(error);
          }
    })
    }
    
    module.exports = { imgUpload }

