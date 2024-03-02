const mongoose = require("mongoose");
var uniqueValidator = require('mongoose-unique-validator');
const userSchema = mongoose.Schema({
    firstName : String,
    lastName : String,
    date : Date,
    email : {type: String, unique: true},
    telephone : {type: String, unique: true},
    adresse : String,
    matricule : String,
    password : String,
    confPassword : String,
    role : String,
    status : String,
    gender : String,
    avatar : String,

})

//Apply the uniqueValidator plugin to userSchema
userSchema.plugin(uniqueValidator);
//Model name user en PascalCase
const user = mongoose.model("User",userSchema);
module.exports = user;