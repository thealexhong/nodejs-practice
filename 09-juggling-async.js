var http = require('http');
var concat = require('concat-stream');

var urls = [];
var out = [];
var responseCount = 0;

process.argv.slice(2).forEach(function (url) {
  urls.push(url);
});

urls.forEach(function (item, index) {
  http.get(item, function (res) {
    res.setEncoding('utf8');
    res.pipe(concat(function (data) {
      out[index] = data;
      responseCount++;
      if (responseCount === urls.length) {
        console.log(out.join('\n'));
      }
    }));
  });
});