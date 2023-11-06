const mongoose = require("mongoose");

const schema = mongoose.Schema;

const user = new schema(
  {
    login: { type: String, required: false },
    password: { type: String, required: false },
    phone: { type: String, required: false },
    name: { type: String, required: false },
  },
  { timestamps: true }
);

module.exports = mongoose.models.user || mongoose.model("user", user);
