var mongoose = require('mongoose');

const BookingSchema = mongoose.Schema({
    
    name: String,
    contact: String,
    ticketNo:Number,
    time:String,
    checkOut:Date
});

module.exports = mongoose.model('boatbooking',BookingSchema)
