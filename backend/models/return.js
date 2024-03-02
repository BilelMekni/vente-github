const mongoose = require("mongoose");
var uniqueValidator = require('mongoose-unique-validator');
const returnSchema = mongoose.Schema({
    firstName : String,
    lastName : String,
    email : {type: String, unique: true},
    subject : String,
    message : String,

    
   
    ownersId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User" // Model name
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    status : String,

})
//Apply the uniqueValidator plugin to returnSchema
returnSchema.plugin(uniqueValidator);
//Model name Response en PascalCase
const response = mongoose.model("Response",returnSchema);
module.exports = response;