require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const ConnectDB = require("./Database/connect");

//routes
const auth_route = require("./routes/auth-route");

//cors
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD"],
    credentials: true,
  })
);

//middleware
app.use(express.json({ limit: "50mb" })); // Increase JSON payload limit
app.use(express.urlencoded({ limit: "50mb", extended: true })); // Increase URL-encoded payload limit

app.get("/", (req, res) => res.send("Hello This is Server Side!"));

//auth route
app.use("/api/auth", auth_route);

const start = async () => {
  try {
    //Connect to Database
    await ConnectDB(process.env.MONGODB_URL)
      .then(() => console.log("MongoDB connected successfully"))
      .catch((error) => console.error("MongoDB connection error:", error));
    app.listen(port, () => {
      console.log(`Server start at port ${port} !`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
