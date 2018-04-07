/*

var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('home.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(8080);
*/

/*
var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  //fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Hello");
    res.end();
  //});
}).listen(8080);*/

var http = require('http');
var fs = require("fs");



http.createServer(function(request, response) {

	if(request.url === "/home.html"){
		sendFileContent(response, "home.html", "text/html");
	}
        else if(request.url === "/wish.html"){
		sendFileContent(response, "wish.html", "text/html");
	}
        else if(request.url === "/wish.html?"){
		sendFileContent(response, "wish.html", "text/html");
	}
        else if(request.url === "/addWish.html?"){
                /*//var fs = require("fs");
                //console.log("\n *STARTING* \n");
                // Get content from file
                var contents = fs.readFileSync("wishes.json");
                // Define to JSON type
                var jsonContent = JSON.parse(contents);
                // Get Value from JSON
                console.log("User Name:", jsonContent.wishes[0].name);
                console.log("Email:", jsonContent.wishes[1].name);

                //log("\n *EXIT* \n");*/
                
		sendFileContent(response, "addWish.html", "text/html");
	}
        else if(request.url === "/game1.html"){
		sendFileContent(response, "game1.html", "text/html");
	}
        else if(request.url === "/game2.html"){
		sendFileContent(response, "game2.html", "text/html");
	}
        else if(request.url === "/letter.html"){
		sendFileContent(response, "letter.html", "text/html");
	}
        else if(request.url === "/aboutHer.html"){
		sendFileContent(response, "aboutHer.html", "text/html");
	}
        else if(request.url === "/wishes.json"){
		sendFileContent(response, "wishes.json", "text/json");
	}
	else if(request.url === "/"){
                sendFileContent(response, "home.html", "text/html");
		//response.writeHead(200, {'Content-Type': 'text/html'});
		//response.write('<b>Hey there!</b><br /><br />This is the default response. Requested URL is: ' + request.url);
	}
	else if(/^\/[a-zA-Z0-9\/]*.js$/.test(request.url.toString())){
		sendFileContent(response, request.url.toString().substring(1), "text/javascript");
	}
	else if(/^\/[a-zA-Z0-9\/]*.css$/.test(request.url.toString())){
		sendFileContent(response, request.url.toString().substring(1), "text/css");
	}
        else if(/^\/[a-zA-Z0-9\/]*.jpg$/.test(request.url.toString())){
		sendFileContent(response, request.url.toString().substring(1), "image/jpeg");
	}
        else if(/^\/[a-zA-Z0-9\/]*.png$/.test(request.url.toString())){
		sendFileContent(response, request.url.toString().substring(1), "image/png");
	}
	else{
		console.log("Requested URL is: " + request.url);
		response.end();
	}
}).listen(8080);

function sendFileContent(response, fileName, contentType){
	fs.readFile(fileName, function(err, data){
		if(err){
			response.writeHead(404);
			response.write("Not Found!");
		}
		else{
			response.writeHead(200, {'Content-Type': contentType});
			response.write(data);
		}
		response.end();
	});
}