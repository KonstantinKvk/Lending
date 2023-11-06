const mongoose = require("mongoose");

const schema = mongoose.Schema;

const banner = new schema(
    {
        title: { type: String, required: false },
        text: { type: String, required: false },
        img: { type: Object, required: false },
        items: { type: Object, required: false }

    },
    { timestamps: true }
);

module.exports = mongoose.models.banner || mongoose.model("banner", banner);
