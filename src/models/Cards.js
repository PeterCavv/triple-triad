const mongoose = require("mongoose");

const CardSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    values: {
        type: Array,
        required: true
    },
    type: {
        type: Number,
        requried: true,
    },
    element: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Element",
        required: true
    }
});

module.exports = mongoose.model("Card", CardSchema);