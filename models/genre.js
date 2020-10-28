const mongoose = require('mongoose');

const genreSchema = new mongoose.Schema({
    name:{ type:String, required: true},
    status:{ type: Boolean, require:true},
    
    

})

module.exports = mongoose.model('Genre', genreSchema)