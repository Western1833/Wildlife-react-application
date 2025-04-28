const Item = require('../models/itemModel.js');
const factory = require('./handlerFactory.js');

exports.getAllItems = factory.getAll(Item);

exports.getSingleItem = factory.getOne(Item, 'item');

exports.createItem = factory.createOne(Item, 'item');

exports.updateItem = factory.updateOne(Item, 'item');

exports.deleteItem = factory.deleteOne(Item, 'item');