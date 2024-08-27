const express = require("express");
const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.send("Hallo Welt!");
});

app.listen(port, () => {
  console.log("Backend Server läuft auf http://localhost:${port}");
});

module.exports = app;
