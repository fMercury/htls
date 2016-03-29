var http = require('http');
var express = require('express');
var nodemailer = require('nodemailer');
var app  = express();
var port =process.env.PORT|| 8080;

//Create a server
var server = http.createServer(app);

app.use("/", express.static(__dirname + "/"));

app.get('/', function(req, res){
	res.sendFile(__dirname + '/views/center.html');
});

//HTTP to send email to client
app.get('/sendEmail', function(req, res){
	// create reusable transporter object using the default SMTP transport
	var transporter = nodemailer.createTransport('smtps://user%40gmail.com:pass@smtp.gmail.com');

	// setup e-mail data with unicode symbols
	var mailOptions = {
	    from: '"Hoteles MIAME" <matias.cincunegui@gmail.com>', // sender address
	    to: req.params.email, // list of receivers
	    subject: 'Tus reservas de hotel ya están siendo consultadas!', // Subject line
	    text: 'Text', // plaintext body
	    html: '<b>Text</b>' // html body
	};

	// send mail with defined transport object
	transporter.sendMail(mailOptions, function(error, info){
	    if(error){
	        return console.log(error);
	    }
	    console.log('Message sent: ' + info.response);
	});
});

//Lets start our server
server.listen(port, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", port);
});
