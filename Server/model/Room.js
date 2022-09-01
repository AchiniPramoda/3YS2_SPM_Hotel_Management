const mongoose = require('mongoose');
const schema = mongoose.Schema;

const Room = new schema({

    RooId: {
        type: String,
        
    },
    roomType: {
        type: String,
        required: true
    },
    beads: {
        type: Number,
        required: true
    },
    clients: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    facilities: {
        type: String,
        required: true
    },
    
   RoomImage: {
        type : String,
        required : true
      
    },
    cloudinary_id: {
        type : String,
        required : true
      
    },
    fileName: {
        type : String,
        required : true
    }

   
})

const assignment = mongoose.model('room',Room);
module.exports = assignment;