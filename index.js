var path = require('path')
var childProcess = require('child_process')
var phantomjs = require('phantomjs-prebuilt')
var binPath = phantomjs.path

var childArgs = [
    path.join(__dirname, 'script.js'), process.env.EMAIL, process.env.PASSWORD, '--ssl-protocol=any'
]


var express = require('express')
var app = express()

app.get('/', function(req, res) {
    var result = '';
    var child = childProcess.execFile(binPath, childArgs, function(err, stdout, stderr) {
        console.log('stdout ', stdout);
        console.log('stderr ', stderr);
        console.log('err', err);
        res.send({data : result});
    })

    // use event hooks to provide a callback to execute when data are available: 
    child.stdout.on('data', function(data) {
        result += data.toString().replace(/([^.@\s]+)(\.[^.@\s]+)*@([^.@\s]+\.)+([^.@\s]+)/,"");
        console.log(data.toString().replace(/([^.@\s]+)(\.[^.@\s]+)*@([^.@\s]+\.)+([^.@\s]+)/,""));
    });
})

app.listen(process.env.PORT || 3000)
