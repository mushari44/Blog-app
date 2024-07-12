const mongoose = require("mongoose");

mongoose
  .connect(
    process.env.MONGO_DB_URL ||
      "mongodb+srv://musharizh56:admin@cluster0.clvs4os.mongodb.net/blogs"
  )
  .then(() => console.log("Connected mongo db"))
  .catch((e) => console.log(e));
