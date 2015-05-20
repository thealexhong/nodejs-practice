var fs = require('fs');
var esc = require('./escape-regex');

module.exports = function (dir, ext, cb) {
  var extFilter = new RegExp('\\.' + esc(ext) + '$');

  fs.readdir(dir, function (err, filenames) {
      if (err) { return cb(err); }
      cb(null, filenames.filter(function (file) {
        return extFilter.test(file);
      }));
  });
};