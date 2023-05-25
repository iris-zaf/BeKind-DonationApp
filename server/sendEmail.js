// const nodemailer = require("nodemailer");

// app.post("/", async (req, res) => {
//   const { email } = req.body;
//   let transporter = nodemailer.createTransport({
//     host: "smtp.ethereal.email",
//     port: "587",
//     auth: {
//       user: "napoleon.stanton5@ethereal.email",
//       pass: "xugMurEjFXZvbhyMux",
//     },
//     tls: {
//       rejectUnauthorized: false,
//     },
//   });
//   const msg = {
//     from: '"The Express App" <theExpressApp@example.com>', // sender address
//     to: `${email}`, // list of receivers
//     subject: "Thank you for subscribing", // Subject line
//     text: "Hello world?", // plain text body
//     // html: "<b>Hello world?</b>", // html body
//   };

//   const info = await transporter.sendMail(msg);

//   console.log("Message sent: %s", info.messageId);

//   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
// });

// module.exports = sendEmail;
