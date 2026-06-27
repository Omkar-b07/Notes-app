const express = require("express");
const mongoose = require("mongoose")
require("dotenv").config();
console.log("URI:", process.env.MONGO_URI);
const app = express();

// app.get("/",(req,res)=>{
//     res.send("Hello Omkar");
// });    //server is working

app.use(express.json());

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));

app.use("/api/notes", require("./routes/noteRoutes"));
app.use("/api/auth", require("./routes/authRoutes"));


app.listen(5000, () => {
    console.log("server started on http://localhost:5000/");
});

