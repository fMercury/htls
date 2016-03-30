var http = require('http');
var express = require('express');
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var app  = express();
var port =process.env.PORT|| 8080;

//Create a server
var server = http.createServer(app);

app.use("/", express.static(__dirname + "/"));

app.get('/', function(req, res){
	res.sendFile(__dirname + '/views/center.html');
});

var options = {
    service: 'gmail',
    auth: {
        user: 'mdq.hoteles',
        pass: "mdqadmin"
    }
  };
  var transporter = nodemailer.createTransport(smtpTransport(options))

//HTTP to send email to client
app.get('/sendEmail', function(req, res){
	console.log("REQ:");
	console.log(req.query.email);
	// create reusable transporter object using the default SMTP transport

	// setup e-mail data with unicode symbols
	var mailOptions = {
	    to: req.query.email, // list of receivers
	    subject: 'Tus reservas de hotel ya están siendo consultadas!', // Subject line
	    html: "<p> Hemos enviado la información a los hoteles indicados. </p>"
	};

	// send mail with defined transport object
	transporter.sendMail(mailOptions, function(error, response){
			if(error){
				res.end('{"success" : "Sent Successfully", "status" : 200}');
			}else{
				res.end('{"error" : "Email error", "status" : 200}');
			}
		});
});

//Lets start our server
server.listen(port, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", port);
});
