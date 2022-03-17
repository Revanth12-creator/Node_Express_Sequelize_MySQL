const express = require("express");

//import sequelize connection
const sequelize = require("./config/db_connection");

//import user routes
const UserRoutes = require("./routes/user_router");

//create express function
const app = express();

// req res body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//connect to routes
app.use("/user", UserRoutes);

//db connection to root file
sequelize
  .sync({ force: false })
  .then(() => {
    console.log("connected");
  })
  .catch((e) => console.log(e));

const PORT = process.env.PORT || 4400;
app.listen(PORT, () => {
  console.log(`server running on`, PORT);
});
