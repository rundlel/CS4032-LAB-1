var net = require("net");
var socket = new net.Socket();

socket.connect(8000, '10.62.0.140', function(){
	console.log("Socket connected");
	socket.write("GET /server.php?message=helloworld HTTP/1.0\r\n\r\n");
});

socket.on("data", function(message){
	message.toString('utf8');
	console.log(message);
});