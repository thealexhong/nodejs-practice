var fs = require('fs');
var esc = require('./escape-regex');
var dir = process.argv[2];
var ext = process.argv[3];
var extFilter = new RegExp('\\.' + esc(ext) + '$');
fs.readdir(dir, function (err, filenames) {
  if (err) return console.error(err);
  filenames.forEach(function (file) {
    if (extFilter.test(file)) {
      console.log(file);
    }
  });
});