const User = require("../model/User");

const register = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    res.send("user register");

    const user = new User(req.body);
}

const login = async (req, res) => {
    res.send("login");
}

module.exports = {
    register,
    login
}