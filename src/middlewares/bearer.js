const bearer = function (req, res, next) {
  //   check if user even set authorization header
  if (!req.headers.authorization) {
    return res.status(403).json({
      message: "Forbidden",
    });
  }
  //   check if user set authorization header with Bearer
  if (!req.headers.authorization.startsWith("Bearer ")) {
    return res.status(403).json({
      message: "Forbidden",
    });
  }
  //   check if user set authorization header with Bearer and token
  if (req.headers.authorization.split(" ").length !== 2) {
    return res.status(403).json({
      message: "Forbidden",
    });
  }
  //   check if user set authorization header with Bearer and token and token is valid
  const token = req.headers.authorization.split(" ")[1];
  req.user = token;
  next();
};

module.exports = {
  bearer,
};
