// credentialsRoute.js
const express = require('express');
const router = express.Router();

router.post('/store-credentials', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // Save user credentials to the database
    const user = new User({ name, email, password });
    await user.save();

    res.status(200).json({ message: 'User credentials stored successfully.' });
  } catch (error) {
    console.error('Error storing user credentials:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
