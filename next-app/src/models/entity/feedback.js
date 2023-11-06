const mongoose = require("mongoose");

const schema = mongoose.Schema;

const feedback = new schema({
    name: { type: String, required: false },
    phone: { type: String, required: false },
    email: { type: String, required: false },
    text: { type: String, required: false }
},
    { timestamps: true })


module.exports = mongoose.models.feedback || mongoose.model("feedback", feedback);
