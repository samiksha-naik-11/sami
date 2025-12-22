const express = require("express");
const bodyParser = require("body-parser");
const { exec } = require("child_process");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post("/saveProfile", (req, res) => {

    const { name, course, year, dob, subjects } = req.body;

    const command = `echo ${name} ${course} ${year} ${dob} ${subjects} | ..\\cpp\\profile.exe`;

    exec(command, (error, stdout) => {
        if (error) {
            res.send("Error saving profile");
        } else {
            res.send(stdout);
        }
    });
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});

app.get("/", (req, res) => {
    res.send("Backend is running successfully");
});

