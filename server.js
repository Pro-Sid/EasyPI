import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Hello Word");
})

app.listen(5000, () => console.log("Server is UP at port 5000"));
