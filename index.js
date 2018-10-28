const express = require("express");
const app = new express();

app.get("/", (req, res) => {
  res.send("an empty express app");
});

var port = process.env.PORT || 3000;
app.listen(port, console.log(`Listening on port ${port}...`));
