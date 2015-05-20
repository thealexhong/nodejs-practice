var net = require('net');
var moment = require('moment');
var port = process.argv[2];
net.createServer(function (socket) {
  socket.end(moment().format('YYYY-MM-DD HH:mm') + '\n');
}).listen(port);