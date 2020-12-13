const express = require("express");
const app = express();

require("dotenv").config();

const connectDB = require("./models/connectDB"); // Database cagirma

const router = require("./routes/router");   // gelen verileri route da göstermek icin olusturduk..
connectDB();

app.use(express.json());                // Postman tarafindan gönderilen datayi json yapiyor
// app.use("/", router);                        // server dan gelen her seyi router a gönderdik...
app.use("/api", router);             // api router a gönderiyor


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`I'm listening on port ${port}`);
});
