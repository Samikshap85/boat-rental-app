var mongoose = require('mongoose');

const boatSchema = mongoose.Schema({
    
    id: String,
    bookingDate: {
        type:Date,
        default: new Date()
    },
    createdAt:{
        type:Date,
        default: new Date()
    }
});

module.exports = mongoose.model('boat',boatSchema)
