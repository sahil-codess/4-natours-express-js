const express = require('express');

const getAllUsers = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This rout is not yet defined',
  });
};

const getUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This rout is not yet defined',
  });
};

const creatUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This rout is not yet defined',
  });
};

const updateUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This rout is not yet defined',
  });
};

const deleteUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This rout is not yet defined',
  });
};

const router = express.Router();

// Mounting multiple routes
router.route('/').get(getAllUsers).post(creatUser);
router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;
