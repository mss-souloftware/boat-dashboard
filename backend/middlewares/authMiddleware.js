// authMiddleware.js

const jwt = require('jsonwebtoken');

// Middleware to verify JWT token
function verifyToken(req, res, next) {
    const token = req.headers['authorization'];
  
    if (!token) return res.status(401).json({ message: 'Token not provided' });
  
    jwt.verify(token, 'your_secret_key', function(err, decoded) {
      if (err) return res.status(500).json({ message: 'Failed to authenticate token' });
  
      req.user = decoded;
      next();
    });
}

// Middleware to restrict access based on user role
function isAdmin(req, res, next) {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Access forbidden' });
    }
    next();
}

module.exports = { verifyToken, isAdmin };
