var net = require("net");
var socket = new net.Socket();

socket.connect(8000, '10.62.0.140', function(){
	socket.setEncoding('utf8');
	console.log("Socket connected");
	socket.write("GET /server.php?message=helloworld HTTP/1.0\r\n\r\n");
});

socket.on("data", function(message){

	console.log(message);
});

socket.on("close", function(){
        console.log("connection closed");
});

