const mongoose = require("mongoose");

const donationSchema = new mongoose.Schema({
  donationTitle: { type: String },
  donationAmount: { type: Number },
});

module.exports =
  mongoose.model.Donations || mongoose.model("Donations", donationSchema);
