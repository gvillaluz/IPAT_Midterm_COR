const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createPool(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'earist',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    }
);

db.getConnection((err) => {
    if (err) console.log("Can't Connect to Database.", err);
    else console.log("Connecting Database Successfully.");
});

app.get("/api/student_info", (req, res) => {
    db.query("SELECT * FROM student_information", (err, results) => {
        if (err) return res.status(401).json({ message: "BLABLABAL" });

        console.log(results[0])

        return res.status(200).json({ message: "Successfull", student: results[0] })
    });
});

app.get("/api/subjects", (req, res) => {
    db.query("SELECT * FROM subjects", (err, subjects) => {
        if (err) return res.status(401).json({ message: "BLABLABAL" });

        console.log(subjects)

        return res.status(200).json({ message: "Successfull", subjects })
    });
});

app.listen(5000, () => {
    console.log("Server is running in port 5000.");
})