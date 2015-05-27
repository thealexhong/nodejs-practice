var url = require('url');
var http = require('http');

var port = process.argv[2];

function isoToHourMinSec(date) {
  return {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds()
  };
}

function isoToUnix(date) {
  return {
    unixtime: date.getTime()
  };
}

var routes = {
  '/api/parsetime': isoToHourMinSec,
  '/api/unixtime' : isoToUnix
};

var server = http.createServer(function (req, res) {
  var thisURL = url.parse(req.url, true);
  var route = routes[thisURL.pathname];

  if (!route || !thisURL.query || !thisURL.query.iso) {
    res.writeHead(404, {'Content Type' : 'application/json'});
    return res.end('{Error : "No such route" }');
  }

  var date = new Date(thisURL.query.iso);
  var result = route(date);

  res.writeHead(200, {'Content-Type' : 'application/json'});
  res.end(JSON.stringify(result));
}).listen(port);

