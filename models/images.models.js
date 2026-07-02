const {mongoose} = require("mongoose");

const ImageSchema = new mongoose.Schema({
    imageUrl: {type:String, require:true},
});

const ImageModel = mongoose.model("Image", ImageSchema);
module.exports = { ImageModel };