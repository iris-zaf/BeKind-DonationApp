const express = require("express");

const router = express.Router();
const nodemailer = require("nodemailer");

const verifyToken = require("../authorize");
//here I will add my controllers
const register = require("../controllers/register");
const login = require("../controllers/login");
const { Donation } = require("../Models/donationModel");

//underneath are the methods for register and login
router.post("/register", register);
router.post("/login", login);

router.get("/success");
router.get("/cancel");

//save donation button
router.post("/donation", verifyToken, async (req, res) => {
  // console.log("req.user", req.user);
  // console.log("req.body", req.body);
  // console.log("req.body.name", req.body.name);
  // console.log("req.body.charity.name", req.body.charity.name);

  try {
    let { charity, amount } = req.body;
    // let amount = req.body.amount;
    // console.log("req.body.amount", req.body.amount);
    let user = req.user;
    console.log("user", user);
    let donation = await Donation.create({
      userID: user.id,
      coverImageUrl: charity.coverImageUrl,
      name: charity.name,
      location: charity.location,
      description: charity.description,
      profileUrl: charity.profileUrl,
      amount: req.body.amount,
      status: charity.pending,
    });
    res.status(200).json(donation);
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Server error" });
  }
});

router.get("/history", verifyToken, async (req, res) => {
  try {
    let user = req.user;
    // console.log(user);
    let donations = await Donation.find({ userID: user.id }).exec();
    console.log("donations", donations);

    res.status(200).json(donations);
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Server error" });
  }
});

//variables for stripe-server side post request to request the payment
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

router.get("/config", (req, res) => {
  res.send({
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  });
});

router.post("/create-payment-intent", async (req, res) => {
  const amount = req.body.amount;
  // console.log("amount", amount);
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "eur",

      automatic_payment_methods: {
        enabled: true,
      },
    });

    res.send({ clientSecret: paymentIntent.client_secret });
  } catch (e) {
    console.log(e);
    res.status(400).send({ error: { message: e.message } });
  }
});

//below the path to send a subscription alert to the user email
// router.post("/", async (req, res) => {
//   const { email } = req.body;
//   let transporter = nodemailer.createTransport({
//     host: "smtp.ethereal.email",
//     port: 587,
//     auth: {
//       user: "napoleon.stanton5@ethereal.email",
//       pass: "xugMurEjFXZvbhyMux",
//     },
//   });
//   const msg = {
//     from: '"The Express App" <theExpressApp@example.com>', // sender address
//     to: `${email}`, // list of receivers
//     subject: "Welcome to our newsletter 💓", // Subject line
//     text: "Thank you for subscribing to our newsletter. You will receive daily updated with the most recent charities and ways to donate. 🤘", // plain text body
//     // html: "<b>Hello world?</b>", // html body
//   };

//   const info = await transporter.sendMail(msg);

//   console.log("Message sent: %s", info.messageId);

//   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
//   res.send("Email send!");
// });

function sendEmail({ recipient_email }) {
  return new Promise((resolve, reject) => {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "iriri2313@gmail.com",
        pass: "qmcvvfqvdphniisy",
      },
    });
    const mail_configs = {
      from: "",
      to: recipient_email,

      text: "Thank you for subscribing! You will get the latest news about new charities and ways to donate!",
    };
    transporter.sendMail(mail_configs, function (error, info) {
      if (error) {
        console.log(error);
        return reject({ message: `  An error has occured` });
      }
      return resolve({ message: `Email send successfully` });
    });
  });
}

router.get("/", (req, res) => {
  sendEmail()
    .then((response) => res.send(response.message))
    .catch((error) => res.status(500).send(error.message));
});

router.post("/send_email", (req, res) => {
  sendEmail(req.body)
    .then((response) => res.send(response.message))
    .catch((error) => res.status(500).send(error.message));
});

module.exports = router;
