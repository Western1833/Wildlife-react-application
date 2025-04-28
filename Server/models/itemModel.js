const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'A tour must have a name!'],
        unique: true,
        trim: true
    },
    category: {
        type: String,
        required: [true, 'A tour must have a difficulty!']
    },
    maxLevel: {
        type: Number,
        required: [true, 'A tour must have a price!'],
        min: [1, 'Minimum level is 1!'],
        max: [99, 'Max level is 99!']
    },
    summary: {
        type: String,
        trim: true,
        required: [true, 'A tour must have a summary!']
    },
    imageCover: {
        type: String,
        required: [true, 'A tour must have a image cover!']
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        select: false
    }
}, {
    toJSON: {virtuals: true},
    toObject: {virtuals: true}
});

itemSchema.post(/^find/, function(docs, next) {
    console.log(`This query took ${Date.now() - this.start} milliseconds!`);
    // console.log(docs);
    next();
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;