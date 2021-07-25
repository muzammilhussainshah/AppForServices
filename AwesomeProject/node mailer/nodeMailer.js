const functions = require('firebase-functions');
const nodemailer = require('nodemailer');


exports.sendEmail = functions.https.onRequest((request, response) => {
    console.log(request.body, '************');

    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'appforservices@gmail.com',
            pass: 'Abcd@123456'
        }
    });

    var message = 'Hello, Welcome to App for Services.'
    var mailOptions = {
        from: 'appforservices@gmail.com',
        to: request.body.recepientEmail,
        subject: 'Welcome to App for Services',
        text: message
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            response.json({ notSent: error });
        } else {
            console.log('Message sent: ' + info.response);
            response.json({ sent: info.response });
        };

    })

    // response.send("Hello from Firebase!");

});




exports.sendJobDataInEmailAPI = functions.https.onRequest((request, response) => {
    console.log(request.body, '************');

    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'appforservices@gmail.com',
            pass: 'Abcd@123456'
        }
    });

    var message;
    if (request.body.type === 'Jobs') {
        message = `Hello,\n A new job has been created with following particulars: 
        Job Title: ${request.body.jobTitle},
        Job Status: ${request.body.status},
        Responsible Email: ${request.body.email},
        Responsible Name: ${request.body.responsibleName},
        Responsible Number: ${request.body.responsibleNumber},
        Job Contract Number: ${request.body.contractNoOfJob},
        Address: ${request.body.address},
        Start Date: ${request.body.begginingDate},
        Expirey Date: ${request.body.expTermDate},         
        Signature of Job Creator: url`
    }
    else{
        message = `Hello,\n A new administrative service has been created with following particulars: 
        Service Title: ${request.body.serTitle},
        Service Status: ${request.body.serStatus},
        Service Email: ${request.body.serEmail},
        Responsible Name: ${request.body.serResName},
        Responsible Number: ${request.body.serResNum},
        Signature of Serivce Creator: url`
    }






    var mailOptions = {
        from: 'appforservices@gmail.com',
        to: request.body.recepientEmail,
        subject: 'Welcome to App for Services',
        text: message
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            response.json({ notSent: error });
        } else {
            console.log('Message sent: ' + info.response);
            response.json({ sent: info.response });
        };

    })

    // response.send("Hello from Firebase!");

});