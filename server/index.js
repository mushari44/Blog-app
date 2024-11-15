const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const blogRouter = require("./route/blog-route");
const favoritesRouter = require("./route/favorites-route");

require("./db");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/favorites", favoritesRouter);
app.use("/api/blogs", blogRouter);

app.use("/api", (req, res) => {
  res.status(200).json({ message: "Hello World!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`App is running at ${PORT}...`));
