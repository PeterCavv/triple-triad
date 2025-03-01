const mongoose = require("mongoose");

const ElementSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model("Element", ElementSchema);