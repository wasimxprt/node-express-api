const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    fname: String
});

module.exports = mongoose.model("User", userSchema);