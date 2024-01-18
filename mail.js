const nodemailer = require('nodemailer');
console.log(nodemailer);

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'Michaelajaude@gmail.com',
        pass: 'Toogood247'
    }
});

const mailOptions = {
    from: 'amzic247@gmaail.com',
    to: 'Michaelajaude@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});