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

// middleware imports
const logger = require("./middleware/logger");
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");

// router imports
const userRouter = require("./routers/user.router");

// middleware - logger
server.use(logger); // server level log, not sub route level log
// server.use("/", logger);

/* ROUTES */

// user router
server.use("/users", userRouter);

// root routes
server.get("/", (req, res) => {
  res.send("<h2>It works!</h2>");
});

server.get("/test", (req, res) => {
  res.send("<h2>Test works!</h2>");
});

// error handling testing
server.get("/error", (req, res, next) => {
  // throw Error();
  //   const data = getDataFromDatabase(); // returns error or data

  // mock error object with attributes
  const mockError = {
    status: 403,
    message: "something went wrong with the server",
  };
  next(mockError);
});

// middleware - 404 not found
server.use(notFound);

// middleware - errorHandler
server.use(errorHandler);
