const mongoose = require("mongoose")
const publicationSchema = mongoose.Schema({
    subject : String,
    description : String,
    ownersId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User" // Model name
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"User" // Model name
    },
    status : String,
})

//Model name User en PascalCase
const publication = mongoose.model("publication",publicationSchema);
module.exports = publication;