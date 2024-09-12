// File: server.js
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const multer = require('multer');
const path = require('path');
const applicationRoutes = require('./routes/applicationRoutes');
const adminRoutes = require('./routes/adminRoutes');
const govRoutes = require('./routes/govRoutes');

dotenv.config();
const app = express();

app.use('/api/uploads', express.static(path.join(__dirname, 'uploads')));
// Connect Database
connectDB();

// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname));
    }
  });
  const upload = multer({ storage: storage });
  
// Routes
app.use('/api/users', userRoutes);

app.use('/api/applications', applicationRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/gov', govRoutes);

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Server Error' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});