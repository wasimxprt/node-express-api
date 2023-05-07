const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

dotenv.config();

const options = {
    connectTimeoutMS: 30000,
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

mongoose.connect(
    process.env.DB_URL,
    options,
).then(() =>
    console.log("Connected to mongodb Successfully")
).catch((err => {
    console.log("Error connecting mongodb:==> ", err.message)
}));

// Import routes
const productRoutes = require("./routes/product");
const userRoutes = require("./routes/user");

// Middlewares
app.use(express.json());
app.use(cors());

// route Middlewares
app.use("/api/products", productRoutes);
app.use("/api/user", userRoutes);

app.listen(3000, () => {
    console.log("Server started at 3000");
});