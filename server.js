require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const itemsRoutes = require("./routes/items");
const categoriesRoutes = require("./routes/categories");


const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/items", itemsRoutes);
app.use("/api/categories", categoriesRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connected to database");
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log("listening for requests on port", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
