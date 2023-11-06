const mongoose = require("mongoose");

const schema = mongoose.Schema;

const navbar = new schema(
  {
    phone: { type: String,required: false },
    email: { type: String, required: false }
  },
  { timestamps: true }
);

module.exports = mongoose.models.navbar || mongoose.model("navbar", navbar);
