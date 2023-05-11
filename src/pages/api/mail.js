import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  const { name, email, message } = req.body;

  // Set up the transporter
  const transporter = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.FROM,
      pass: process.env.PASS,
    },
    tls: {
      ciphers: 'SSLv3',
    },
  });

  // Create the email message
  const mailOptions = {
    from: process.env.FROM,
    to: process.env.TO,
    subject: `New message from ${name}`,
    text: message,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);

    // Return a success response
    res.json({ status: 'ok', message: 'Email sent successfully' });
  } catch (error) {
    // Log the error and return an error response
    console.error(error);
    res.json({ message: 'Error sending email', error: error});
  }
}

/* import sgMail from '@sendgrid/mail';

export default async function handler(req, res) {
  const { name, email, message } = req.body;

  sgMail.setApiKey(process.env.AUTH_TOKEN);

  const msg = {
    to: 'wiromatic@gmail.com', // Replace with your own email address
    from: 'amitwani@hotmail.com',
    subject: `New message from ${name} ${email}`,
    text: message,
  };

  try {
    await sgMail.send(msg);
    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    let err =  await JSON.stringify(error)
    res.status(500).json({ error: err  });
  }
}

 */
