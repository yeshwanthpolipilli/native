const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const pool = require("./db");

const app = express();

app.use(bodyParser.json());
app.use(cors());

const PORT = 6500;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get("/hello", async (req, res) => {
    console.log("Request received at /hello");

    try {
        const alltodo = await pool.query("SELECT * FROM loginform");
        res.json(alltodo.rows);
    } catch (error) {
        console.error("Error while fetching data:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
});
