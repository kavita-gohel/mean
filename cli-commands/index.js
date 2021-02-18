const fs = require('fs'); 
const path = require('path'); 
const process = require('process');    

// -----> mkdir (create new directory)
    // fs.mkdir(path.join(__dirname, 'test2'), (err) => { 
    //     if (err) { 
    //         return console.error(err); 
    //     } 
    //     console.log('Directory created successfully!'); 
    // }); 


// -----> ls (list of file names)
    // let directory_name = "test-ls"; 
    // // get current filenames in directory 
    // let filenames = fs.readdirSync(directory_name); 
    // console.log("\nFilenames in directory:"); 
    // filenames.forEach((file) => { 
    //     console.log(file); 
    // }); 


// -----> cwd (change current directory)
    // console.log("Current working directory: ",process.cwd()); 
    // try { 
    // process.chdir('../module-demo'); 
    // console.log("Working directory after changing directory: ", process.cwd()); 
    // } 
    // catch (err) { 
    // console.error("error occured while changing directory: ", err); 
    // } 


// -----> cd (change current directory to level up)
    // console.log("Current working directory: ",process.cwd()); 
    // try { 
    // process.chdir('../'); 
    // console.log("Working directory after changing directory: ", process.cwd()); 
    // } 
    // catch (err) { 
    // console.error("error occured while changing directory: ", err); 
    // } 



// -----> rmdir (remove directory)
    // fs.rmdir("dir1", () => { 
    // console.log("Folder Deleted!");
    // }); 
     


// -----> cp (copy content of file)
    // function callback(err) {
    // if (err) throw err;
    // console.log('demo1.txt was copied to demo2.txt');
    // }
    // fs.copyFile('demo1.txt', 'demo2.txt', callback);


// -----> cls
    // console.clear();


// -----> type(file-name)
    // var ext = path.extname('package.json');
    // console.log(ext);