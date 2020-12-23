const nodemailer = require('nodemailer');

exports.handler = (event, context, callback) => {

  return {
    statusCode: 200,
    body: JSON.stringify({
      result : 'success',
    }),
  };

  // const data = JSON.parse(event.body);

  // const transporter = nodemailer.createTransport({
  //   host: 'smtp.zoho.eu',
  //   port: 465,
  //   secure: true,
  // });

  // transporter.sendMail({
  //   from: 'andrecorreia@zohomail.eu',
  //   to: 'andrefbcorreia@gmail.com',
  //   subject: 'Contact from andrefbcorreia.github.io page',
  //   html: `
  //     <h3>Email from ${data.name} ${data.email}<h3>
  //     <p>${data.message}<p>
  //   `,
  // }, (err) => {
  //   if (err) {
  //     callback(err);
  //   } else {
  //     callback(null, {
  //       statusCode: 200,
  //       body: JSON.stringify({
  //         'result' : 'success',
  //       }),
  //     });
  //   }
  // });
};
