const mongoose = require("mongoose");

const AmountSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
});

module.exports =
  mongoose.model.Amount || mongoose.model("Amount", AmountSchema);
