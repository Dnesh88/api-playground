/* server definition */

const express = require("express");
const server = express();
const port = 8080;

server.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});

/* middleware. common usage
    - logging
    - authentication, authorization
*/

// logger
server.use((req, res, next) => {
  const { url, method } = req;
  const time = new Date();
  const message = `${method} - ${url} - ${time}`;
  console.log(message);
  next();
});

/* routes */
server.get("/", (req, res) => {
  res.send("<h2>It works!</h2>");
});
