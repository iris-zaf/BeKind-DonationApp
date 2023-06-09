const mongoose = require("mongoose");

const donationSchema = new mongoose.Schema(
  {
    userID: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    coverImageUrl: { type: String },
    name: { type: String },
    location: { type: String },
    description: { type: String },
    profileUrl: { type: String },
    amount: { type: Number },
    status: {
      type: String,
      enum: ["pending", "completed"],
      default: "pending",
    },
  },
  { timestamps: true }
);

const Donation = mongoose.model("Donation", donationSchema);
module.exports = { Donation };
