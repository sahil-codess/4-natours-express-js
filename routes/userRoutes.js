const express = require('express');

const router = express.Router();
const userController = require('./../controllers/userController');

// Mounting multiple routes
router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.creatUser);
router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
