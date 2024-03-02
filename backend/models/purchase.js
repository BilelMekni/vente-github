const mongoose = require("mongoose");
var uniqueValidator = require('mongoose-unique-validator');
const purchaseSchema = mongoose.Schema({
    firstName : String,
    lastName : String,
    phone : {type: String, unique: true},
    email : {type: String, unique: true},
    type : String,
    products : String,
    price : String,
    quantity : String,

    
   
    clientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User" // Model name
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    status : String,

})
//Apply the uniqueValidator plugin to userSchema
purchaseSchema.plugin(uniqueValidator);
//Model name User en PascalCase
const purchase = mongoose.model("Purchase",purchaseSchema);
module.exports = purchase;