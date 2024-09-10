const User = require('../models/User');
const jwt = require('jsonwebtoken');

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    });
};

const generateUserId = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
};

const getRoleFromEmail = (email) => {
    if (email.endsWith('@gov.com')) return 'gov';
    if (email.endsWith('@admin.com')) return 'admin';
    return 'user';
};

exports.registerUser = async (req, res) => {
    try {
        const { fullName, email, phoneNumber, password } = req.body;

        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const userId = generateUserId();
        const role = getRoleFromEmail(email);

        const user = await User.create({
            fullName,
            email,
            phoneNumber,
            password,
            userId,
            role
        });

        if (user) {
            res.status(201).json({
                _id: user._id,
                fullName: user.fullName,
                email: user.email,
                userId: user.userId,
                role: user.role,
                token: generateToken(user._id),
            });
        } else {
            res.status(400).json({ message: 'Invalid user data' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// exports.loginUser = async (req, res) => {
//     try {
//         const { loginIdentifier, password } = req.body;

//         const user = await User.findOne({
//             $or: [{ email: loginIdentifier }, { userId: loginIdentifier }]
//         });

//         if (user && (await user.matchPassword(password))) {
//             res.json({
//                 _id: user._id,
//                 fullName: user.fullName,
//                 email: user.email,
//                 userId: user.userId,
//                 role: user.role,
//                 token: generateToken(user._id),
//             });
//         } else {
//             res.status(401).json({ message: 'Invalid email/userId or password' });
//         }
//     } catch (error) {
//         res.status(500).json({ message: 'Server error', error: error.message });
//     }
// };

exports.loginUser = async (req, res) => {
    const { loginIdentifier, password } = req.body;
  
    try {
      // Check if user exists
      const user = await User.findOne({
        $or: [{ email: loginIdentifier }, { userId: loginIdentifier }]
      });
  
      if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
  
      // Check password
      const isMatch = await user.matchPassword(password);
  
      if (!isMatch) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
  
      // Create token
      const token = jwt.sign(
        { id: user._id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: '1d' }
      );
  
      res.json({
        token,
        role: user.role,
        fullName: user.fullName
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  };
