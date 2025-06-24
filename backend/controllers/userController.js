const User = require("../models/user");
const zod = require("zod");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

const userData = zod.object({
  username: zod.string().email(),
  password: zod.string(),
});

const login = async (req, res) => {
  const { success } = userData.safeParse(req.body);

  console.log("hello");
  console.log(success);

  if (!success) {
    return res.status(400).json({
      message: "incorrect inputs",
    });
  }

  const { username, password } = req.body;

  // console.log(success);
  console.log(req.body);

  let user = await User.findOne({ username });

  if (!user) {
    user = await User.create({
      username,
      password,
    });
  }
  console.log(user);
  console.log("JWT_SECRET:", JWT_SECRET);
  const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: "1h" });

  return res.status(200).json({
    message: "Login successful",
    token: token,
  });
};

module.exports = login;
