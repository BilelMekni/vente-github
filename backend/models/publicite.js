const mongoose = require("mongoose")
const publiciteSchema = mongoose.Schema({
    title : String,
    description : String,
    date : Date,
    clientId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User" // Model name
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"User" // Model name
    },
    status : String,
    gender : String,

})

//Model name User en PascalCase
const publication = mongoose.model("Publicite",publiciteSchema);
module.exports = publication;