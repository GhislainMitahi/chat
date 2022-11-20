const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://GislainMitahi:uPYueYQGHg8A559R@cluster0.0oeuafm.mongodb.net/?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log(`MongoDb connect  : ${conn.connection.host}`.cyan.underline)
    } catch (error) {
        console.log(`Error is that: ${error.message}`.red.bold);
        process.exit();
    }
}

module.exports = connectDB;