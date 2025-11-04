module.exports = (err, req, res, next) => {
  console.log(err.message);
  res.status(err.status || 500);
  res.json({
    message: err.message,

    // exposing the entire error object is a security concern
    // error: err,
  });
};
