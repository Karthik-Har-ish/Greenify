const mongoose = require("mongoose")
require("dotenv").config()
const DATABASE_URL = process.env.DATABASE_URL

main().then(
    () => console.log("Connected to MongoDB"))
    .catch(
    (err) => console.error("Error connecting to MongoDB", err))



async function main() {
    await mongoose.connect(DATABASE_URL)
}