// 'use strict';
var http = require('http');
var fs = require('fs');
var iothub = require('azure-iothub');
var port = process.env.PORT || 1337;

//var connectionString = 'HostName=FedUPS.azure-devices.net;SharedAccessKeyName=FedUPS-iot-hub;SharedAccessKey=aA06gd7aqFKjbG9xOshttDRI36eh1fBcpgNLwtFc1eY=';

//var registry = iothub.Registry.fromConnectionString(connectionString);

/*
var device = {
    deviceId: 'sample-device-' + Date.now()
};
*/

http.createServer(function (req, res) {
    fs.readFile("Page1.html", function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end('Hello World\n');
    });
}).listen(port, () => {
    console.log("running on port" + port);
});