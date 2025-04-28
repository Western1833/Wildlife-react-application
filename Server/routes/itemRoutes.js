const express = require('express');

const itemController = require('../controlers/itemController.js');
const authController = require('../controlers/authController.js');

const router = express.Router();

router.route('/')
.get(itemController.getAllItems)
.post(itemController.createItem);

router.route('/:id')
.get(itemController.getSingleItem)
.patch(authController.protect, itemController.updateItem)
.delete(authController.protect, itemController.deleteItem);

module.exports = router;