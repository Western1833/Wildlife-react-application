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
    imageUrl: {
        type: String,
        required: [true, 'A tour must have a image url!']
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        select: false
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
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