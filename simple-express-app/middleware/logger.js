// middleware - logger functionality
const express = require("express");
const server = express();

module.exports = server.use((req, res, next) => {
  const { url, method } = req;
  const time = new Date();
  const message = `${method} - ${url} - ${time}`;
  console.log(message);
  next();
});
