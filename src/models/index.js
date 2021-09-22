//phil welsby - 22 sept 2021 - models/index.js

const mongoose = require("mongoose");

const guitarSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true,
    },
    year: {
        type: String,

    },
});

const Guitar = model.mongoose("Guitar", guitarSchema);

module.exports = Guitar;
