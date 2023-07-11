const reqAuth = (req, res, next) => {
  const authToken = req.headers.authorization;

  if (authToken === `Bearer ${process.env.AUTH_TOKEN}`) {
    next();
  }
  else {
    res.status(401).json({ error: "Unauthorized Access" });
  }
};

module.exports = reqAuth;