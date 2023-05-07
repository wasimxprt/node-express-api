const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "Please enter first name"]
    },
    lastName: {
        type: String,
        required: [true, "Please enter last name"]
    },
    email: {
        type: String,
        required: [true, "Please enter email address"],
        unique: [true, "Email address already taken"]
    },
    password: {
        type: String,
        required: [true, "Please enter password"]
    }
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);