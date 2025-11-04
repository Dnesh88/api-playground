const express = require("express");
const server = express();
const port = 8080;

server.get("/", (req, res) => {
  res.send("<h2>It works!</h2>");
});

server.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});
