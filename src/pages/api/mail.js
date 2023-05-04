import nodemailer from 'nodemailer';

export default async function handler(req, res) {
const {name,email, message, subject} = req.body;
/* console.log(name, email, message, subject);
 */var transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
    tls: {
      rejectUnauthorized: false
    }
});

/* console.log(process.env.USER, process.env.PASS, process.env.TO);
 */
var mailOptions = {
  from: process.env.USER,
  to: process.env.TO,
  subject: subject,
  text: `
  Name: ${name}\n,
  Email: ${email}\n,
  Subject ${subject}\n,
  Message: ${message}`
  // html: '<h1>Hi Smartherd</h1><p>Your Messsage</p>'        
};

console.log(message);
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    res.json({status: 'failure', error: 'failed to deliver'})
  } else {
/*     console.log('Email sent: ' + info.response);
 */    res.json({status: 'ok', message: info.response});
  }
});

} 