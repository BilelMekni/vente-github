const mongoose = require("mongoose");
var uniqueValidator = require('mongoose-unique-validator');
const contactSchema = mongoose.Schema({
    name : String,
    email : {type: String, unique: true},
    subject : String,
    message : String,
})
// Apply the uniqueValidator plugin to contactSchema.
contactSchema.plugin(uniqueValidator);
//Model name Contact en PascalCase
const contact = mongoose.model("Contact",contactSchema);
module.exports = contact;