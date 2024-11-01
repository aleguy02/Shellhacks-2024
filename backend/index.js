const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const postQuery = require("./controllers/queryControllers")
const validateQuery = require("./middleware/validateQueryMiddleware")


port = process.env.PORT || 5001;

app.use(express.json());
app.use(cors());
app.use(validateQuery) // custom middleware to check query validity

app.get("/", async (req, res) => {  // pretty sure this is unnecessary
    res.status(200).send("Get");
})

app.post("/", postQuery) // User films out form with their question

app.listen(port, () => {
    console.log("Running on port:", port)
})



