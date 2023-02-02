const User = require("../models/User");

const checkUser = async function (req, res, next) {
  const user = req.user;
  if (!user) {
    return res.status(403).json({
      message: "Unauthorized",
    });
  }
  const userExist = await User.findOne({
    where: {
      name: user,
    },
  });
  if (!userExist?.user_id) {
    return res.status(403).json({
      message: "Unauthorized",
    });
  }
  req._user_id = userExist.user_id;
  next();
};

module.exports = {
  checkUser,
};
