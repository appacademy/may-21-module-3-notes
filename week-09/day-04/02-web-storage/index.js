const express = require("express");
const path = require("path");

const index = express();
index.use(express.static("public"));

const port = 8081;

index.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

index.listen(port, () => console.log(`Listening on port ${port}!`));
