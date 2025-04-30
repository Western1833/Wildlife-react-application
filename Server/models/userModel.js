const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Email is required!'],
        unique: [true, 'Email already in use!'],
        lowercase: true,
        validate: [validator.isEmail, 'Please provide valid email.']
    },
    password: {
        type: String,
        required: [true, 'Please provide a password.'],
        minLength: 4,
        select: false
    }
});

userSchema.virtual('passwordConfirm')
.set(function(value){
    this._passwordConfirm = value;
})
.get(function(){
    return this._passwordConfirm;
});

userSchema.pre('validate', function(next){
    if (!this._passwordConfirm) {
        this.invalidate('passwordConfirm', 'Please confirm your password.');
    }

    if(this.password !== this._passwordConfirm){
        this.invalidate('passwordConfirm', 'Passwords do not match!');
    }

    next();
});

userSchema.pre('save', async function(next) {
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

userSchema.methods.correctPassword = async function(candidatePassword, userPassword){
    return await bcrypt.compare(candidatePassword, userPassword);
};

const User = mongoose.model('User', userSchema);

module.exports = User;