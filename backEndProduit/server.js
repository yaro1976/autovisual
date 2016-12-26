'use strict';

// Required modules
var express = require('express');
var multer = require('multer');
var fs = require('fs');

// Create the ExpressJS Application
var app = express();

// Define Port and IP used by the application
const PORT = process.env.PORT || '80' ;
const IP = process.env.IP || '0.0.0.0' ;

// Root directory of the application
const root = 'public';

// Local upload directory
var uploadDir = root + '/upload/';

// Define the root of the application
app.use(express.static( __dirname + '/' + root));

// Check if file exists
var existsFile = function (fsname) {
    let indice = 0;
    
// Store the original name
    let newName = fsname;
    while (fs.existsSync(uploadDir + newName )) {
        indice++;
// Add an indice to the file name
        newName = fsname + '(' + indice + ')';
    }
// Return the new name of the file
    return newName;
};


// Format the file name
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
      // Set the destination directory name
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    //   Set the name of the file
    cb(null, existsFile(file.originalname));
  }
});

// Destination of the upload files
var upload = multer({ storage : storage });

// Route definition
// When post is done, get the file name, and store it
app.post('/', upload.any(),function(req, res) {
// Store the file
    res.end('<div><p>The file : '+ req.files[0].originalname +' has been uploaded<p></div>');

});

app.get('/', function(req, res) {

});

// Server listen activation
app.listen(PORT, IP, function() {
    console.log('Server is started on port ' + PORT);
});
