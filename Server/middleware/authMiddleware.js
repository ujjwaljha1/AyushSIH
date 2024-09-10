// // const jwt = require('jsonwebtoken');
// // const User = require('../models/User');

// // const protect = async (req, res, next) => {
// //     let token;

// //     if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
// //         try {
// //             token = req.headers.authorization.split(' ')[1];
// //             const decoded = jwt.verify(token, process.env.JWT_SECRET);
// //             req.user = await User.findById(decoded.id).select('-password');
// //             next();
// //         } catch (error) {
// //             res.status(401).json({ message: 'Not authorized, token failed' });
// //         }
// //     }

// //     if (!token) {
// //         res.status(401).json({ message: 'Not authorized, no token' });
// //     }
// // };

// // module.exports = { protect };


// const jwt = require('jsonwebtoken');
// const User = require('../models/User');

// // Middleware to protect routes and verify token
// const protect = async (req, res, next) => {
//     let token;

//     if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
//         try {
//             token = req.headers.authorization.split(' ')[1];
//             const decoded = jwt.verify(token, process.env.JWT_SECRET);
//             req.user = await User.findById(decoded.id).select('-password');
//             next();
//         } catch (error) {
//             res.status(401).json({ message: 'Not authorized, token failed' });
//         }
//     }

//     if (!token) {
//         res.status(401).json({ message: 'Not authorized, no token' });
//     }
// };

// // Middleware to verify admin token
// const verifyAdminToken = async (req, res, next) => {
//     let token;

//     if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
//         try {
//             token = req.headers.authorization.split(' ')[1];
//             const decoded = jwt.verify(token, process.env.JWT_SECRET);
//             req.user = await User.findById(decoded.id).select('-password');
            
//             // Check if the user has the role 'admin'
//             if (req.user.role !== 'admin') {
//                 return res.status(403).json({ message: 'Not authorized as admin' });
//             }

//             next();
//         } catch (error) {
//             res.status(401).json({ message: 'Not authorized, token failed' });
//         }
//     }

//     if (!token) {
//         res.status(401).json({ message: 'Not authorized, no token' });
//     }
// };
// const verifyGovToken = async (req, res, next) => {
//     let token;

//     if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
//         try {
//             token = req.headers.authorization.split(' ')[1];
//             const decoded = jwt.verify(token, process.env.JWT_SECRET);
//             req.user = await User.findById(decoded.id).select('-password');
            
//             // Check if the user has the role 'government'
//             if (req.user.role !== 'government') {
//                 return res.status(403).json({ message: 'Not authorized as government user' });
//             }

//             next();
//         } catch (error) {
//             res.status(401).json({ message: 'Not authorized, token failed' });
//         }
//     }

//     if (!token) {
//         res.status(401).json({ message: 'Not authorized, no token' });
//     }
// };


// module.exports = { protect, verifyAdminToken,verifyGovToken };



const jwt = require('jsonwebtoken');
const User = require('../models/User');


// Middleware to protect routes and verify token
const protect = async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.id).select('-password');
            next();
        } catch (error) {
            res.status(401).json({ message: 'Not authorized, token failed' });
        }
    }

    if (!token) {
        res.status(401).json({ message: 'Not authorized, no token' });
    }
};

const verifyToken = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select('-password');
      next();
    } catch (error) {
      return res.status(401).json({ message: 'Not authorized, token failed' });
    }
  }

  if (!token) {
    return res.status(401).json({ message: 'Not authorized, no token' });
  }
};

const verifyGovToken = async (req, res, next) => {
  await verifyToken(req, res, () => {
    if (req.user && req.user.role === 'gov') {
      next();
    } else {
      res.status(403).json({ message: 'Not authorized as government official' });
    }
  });
};

const verifyAdminToken = async (req, res, next) => {
  await verifyToken(req, res, () => {
    if (req.user && req.user.role === 'admin') {
      next();
    } else {
      res.status(403).json({ message: 'Not authorized as admin' });
    }
  });
};

module.exports = { protect, verifyToken, verifyGovToken, verifyAdminToken };