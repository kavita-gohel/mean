const fs = require('fs')
const path = './module-demo/test2.txt'

    if (fs.existsSync(path)) {
    console.log("file exist");
    fs.unlinkSync(path);
    console.log("file deleted");
    }
    
    else{
    console.error("file not found");
    }
  