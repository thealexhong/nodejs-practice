var fs = require('fs');
var path = require('path');
var mymodule = require('./node-async6a');



var ext = process.argv[3];
fs.readdir(process.argv[2], finishedReading);
function finishedReading(err, list) {
  if (err) return console.error(err);
  for (var i = 0; i < list.length; i++)
  {
    if (path.extname(list[i]) === '.' + ext)
      console.log(list[i]);
  }
}