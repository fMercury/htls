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
	// create reusable transporter object using the default SMTP transport

	// setup e-mail data with unicode symbols
	var mailOptions = {
	    to: req.query.email, // list of receivers
	    subject: 'SOLICITUD RESERVA HotelMDQ', // Subject line
	    html: ""
	};
	if (req.query.dni==""){
		req.query.dni= "(No provisto)";
	}
	var mailBody= "<h3> Hemos procesado una solicitud con los siguientes datos: </h3>"+"<p><b>Usuario: </b>"+req.query.username+"</p>"+"<p><b>Mail: </b>"+req.query.email+"</p>"+"<p><b>Teléfono: </b>"+req.query.phone+"</p>"+"<p><b>DNI: </b>"+req.query.dni+"</p>"+"<p><b>Fecha de llegada: </b>"+req.query.arrivalDate+"</p>"+"<p><b>Fecha de partida: </b>"+req.query.leavingDate+"</p>"+"<p><b>Cantidad de personas: </b>"+req.query.people+"</p>";
	mailBody +="<h3> Los siguientes hoteles han sido seleccionados: </h3>";
	for (i in req.query.hotels){
		var hotel= JSON.parse(req.query.hotels[i]);
		mailBody+="<p>"+hotel.name+"</p>";
	}
	mailOptions.html=mailBody;

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
