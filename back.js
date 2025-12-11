const express = require("express");
const app = express();

app.use(express.json()); // to read JSON data

app.get("/", (req, res) => {
    res.send("Hello from Node.js Express Server!");
});

app.post("/submit", (req, res) => {
    const data = req.body;
    res.send("Received data: " + JSON.stringify(data));
});

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});

