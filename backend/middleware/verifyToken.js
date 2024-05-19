const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(401).json({statusCode:401, message: 'Access denied. No token provided.' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({statusCode:401, message: 'Invalid token.' });
    }
    req.userId = decoded.userId;
    next();
  });
};

module.exports = verifyToken;
