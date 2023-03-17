const jwt = require("jsonwebtoken");
const JWT_SECRET = "AuthenicatedBY$Rajesh$";

const fetchuser = (req, res, next) => {
  //get user detail from jwt token and append id in req
  const token = req.header('auth-token');
  if (!token) {
    return res.status(401).json({ error: "User Unauthenticated" });
  }
  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
    next();
  } catch (error) {
    return res.status(401).json({ error: "User Unauthenticated" });
  }
};

module.exports = fetchuser;
