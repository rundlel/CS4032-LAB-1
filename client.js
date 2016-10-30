var net = require("net");
var socket = new net.Socket();

socket.connect(8000, 10.62.0.140, function(){
	console.log("Socket connected");
	socket.write("hello world");
});

socket.on("data", function(message){
	console.log(message);
});