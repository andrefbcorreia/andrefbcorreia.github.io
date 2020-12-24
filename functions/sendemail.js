const nodemailer = require('nodemailer');

exports.handler = (event, context, callback) => {
  const data = JSON.parse(event.body);

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "andrefbcorreia@gmail.com",
      pass: "vdkwboxdduxsccna",
    },
  });

  transporter.sendMail({
    from: data.email,
    to: 'andrefbcorreia@gmail.com',
    subject: 'Contact from andrefbcorreia.github.io page',
    html: `
      <h3>Email from ${data.name}</h3>
      <p>Message: ${data.message}</p>
    `,
  }, (err) => {
    if (err) {
      callback(err);
    } else {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify({
          'result' : 'success',
        }),
      });
    }
  });
};
