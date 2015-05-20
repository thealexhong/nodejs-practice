var fs = require('fs');
var countLines = require('./count-lines.js');
var buf = fs.readFileSync(process.argv[2], 'utf8');
console.log(countLines(buf));
//console.log(buf.toString().split('\n').length - 1);