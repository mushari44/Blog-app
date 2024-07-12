const mongoose = require("mongoose");

const MONGO_DB_URL =
  process.env.MONGO_DB_URL ||
  "mongodb+srv://musharizh56:admin@cluster0.clvs4os.mongodb.net/blogs";
mongoose
  .connect(MONGO_DB_URL)
  .then(() => console.log("Connected mongo db"))
  .catch((e) => console.log(e));
