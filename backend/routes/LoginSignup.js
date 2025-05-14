const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require('../models/User');
const { authenticate, isAdmin } = require('../middleware/AuthMiddleware');


const JWT_SECRET = process.env.JWT_SECRET;
// Signup
router.post('/signup', async (req, res) => {
  try {
    const { username, email, password, role } = req.body;  // Get the role from the request body

    // Ensure that the role is either "user" or "admin"
    const isAdmin = role === 'admin';  // Default to false for user if no valid role is provided

    // Check if user or email already exists
    const existing = await User.findOne({ $or: [{ email }, { username }] });
    if (existing) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create new user with the appropriate role
    const newUser = new User({ 
      username, 
      email, 
      password, 
      isAdmin  // Set the isAdmin flag based on the role
    });

    // Save the new user
    await newUser.save();

    res.status(201).json({ message: 'Signup successful' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate token
    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '7d' });

    res.status(200).json({
      message: 'Login successful',
      token, // send token to frontend
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        isAdmin: user.isAdmin,
      },
    });
 } catch (error) {
  console.error("Login error:", error); // Add this for better debugging
  res.status(500).json({ message: 'Server error' });
}
});


// 🔐 Get All Registered Users (Admin only)
router.get('/users', authenticate, isAdmin, async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users' });
  }
});


module.exports = router;


// const token = localStorage.getItem("token");

// const res = await fetch(`${SERVER_URL}/api/auth/users`, {
//   headers: {
//     Authorization: `Bearer ${token}`,
//   },
// });
