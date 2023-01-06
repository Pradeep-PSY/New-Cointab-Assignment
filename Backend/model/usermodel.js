const {Schema, model} = require("mongoose");

const userSchema = new Schema({
    gender:{ type:String },
    name:{ type:String },
    location:{ },
    email: { type:String },
    dob: { type:String }
})

const userModel = model('user', userSchema);

module.exports = userModel;