const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose
  .connect("mongodb+srv://musharizh56:admin@cluster0.clvs4os.mongodb.net/blogs")
  .then(() => console.log("Connected mongo db"))
  .catch((e) => console.log(e));
