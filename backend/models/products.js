const mongoose = require("mongoose");
var uniqueValidator = require('mongoose-unique-validator');
const productsSchema = mongoose.Schema({
    name : String,
    type : String,
    reference : {type: String, unique: true},
    stock : String,
    price : String,
    supplier : String,
   

    ownersId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User" // Model name
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"User" // Model name
    },
    status : String,
    disponible : String,
})
//Apply the uniqueValidator plugin to userSchema
productsSchema.plugin(uniqueValidator);
//Model name User en PascalCase
const products = mongoose.model("Products",productsSchema);
module.exports = products;