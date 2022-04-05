const mongoose = require('mongoose');
const env = require("dotenv");
const runDb = () => {
    mongoose.connect(
        `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.ipjag.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`
    )
        .then(() => {
            console.log("Database Connected");
        });
}
module.exports = runDb;