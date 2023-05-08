const express = require("express");

const router = express.Router();
const User = require("../Models/userModel");
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
  console.log("req.user", req.user);
  console.log("req.body", req.body);
  try {
    let { coverImageUrl, name, location, description, profileUrl } = req.body;
    let user = req.user;
    console.log("user", user);
    let donation = await Donation.create({
      userID: user.id,
      coverImageUrl,
      name,
      location,
      description,
      profileUrl,
    });
    res.status(200).json(donation);
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Server error" });
  }
});

//variables for stripe-server side post request to request the payment
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

//below it is just a test-i will need to implement the every.org donation API
const storeItems = new Map([
  [1, { priceInCents: 1000, name: "Learn React" }],
  [2, { priceInCents: 2000, name: "Learn CSS" }],
]);

router.post("/create-checkout-session", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: req.body.items.map((item) => {
        const storeItem = storeItems.get(item.id);
        return {
          price_data: {
            currency: "eur",
            product_data: {
              name: storeItem.name,
            },
            unit_amount: storeItem.priceInCents,
          },
          quantity: item.quantity,
        };
      }),
      mode: "payment",
      success_url: `${process.env.SERVER_URL}/success`,
      cancel_url: `${process.env.SERVER_URL}/cancel`,
    });

    res.json({ url: session.url });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});
module.exports = router;
