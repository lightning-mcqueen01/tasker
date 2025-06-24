const express = require("express");
const cors = require("cors");

const connectdb = require("./db");
const User = require("./models/user");
const userRouter = require("./routes/userRouter");

connectdb();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/user", userRouter);

app.listen(8000);
console.log("App listens on port : ", 8000);
