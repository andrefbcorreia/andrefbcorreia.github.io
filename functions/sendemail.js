const nodemailer = require('nodemailer');

exports.handler = async (event, context, callback) => {
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
      console.log("Err", err);
      return {
        statusCode: 400,
        body: `Error: ${err}`
      };
    } else {
      console.log("All ok")
      return {
        statusCode: 200,
        body: "All ok",
      };
    }
  });
};

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
//};
