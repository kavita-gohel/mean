//http
    var http = require('http');
    console.log("http====> Server is ruuning on port 3001");
    http.createServer(function (req, res) {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write('Hello World!');
        res.end();
    }).listen(3001);

//path
    var path = require('path');
    var filename = path.basename('/module-demo/core-module.js');
    console.log("path====> ",filename);

//querystring
    var querystring = require('querystring');
    var q = querystring.parse('year=2021&month=february');
    console.log("querystring====> Year :",q.year);

// file system - fs
    var fs = require("fs");
    fs.readFile("test.txt","utf8",(err,data) =>{
        console.log("fs====> ",data);
    })
    const add = " this data is written to the file";
    fs.appendFile("test.txt",add, () => {
        console.log("File updated.")
    });

// url
    var url = require('url')
    const urlLink = "http://localhost:3001/get?name=abc&gender=female&email=abc@gmail.com"
    var urlObj = url.parse(urlLink);
    console.log("url====> Port:",urlObj.port," Query:",urlObj.query," Pathname:",urlObj.pathname);

//util
    var util = require('util');
    var txt = 'hello %s, Welcome to nodejs';
    var result = util.format(txt, 'xyz' ); 
    console.log("util====> ",result);


//local module

    var myLogModule = require('./log.js');
    console.log("---Local Module---")
    console.log("Log Module====> ")
    myLogModule.info('Node.js started');
    myLogModule.warning('Something Missing');
    myLogModule.error("Oops Erorr Occur");
    
    var myOperation = require('./operation.js');
    a = 5
    b = 10
    console.log("Operation Module ====> ")
    myOperation.add(a+b);
    myOperation.sub(a-b);
    myOperation.mul(a*b);
    myOperation.div(a/b);