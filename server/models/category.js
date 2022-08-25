const mongoose = require('mongoose');
const categorySchema = new mongoose.Schema({
    name:{
        type: String,
        required: 'This field is required.'
    },
    image:{
        type:String,
        required:'This feild is required.'
    },
});
module.exports = mongoose.model('category',categorySchema)