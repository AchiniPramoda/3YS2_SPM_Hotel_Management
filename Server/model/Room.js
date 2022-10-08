const mongoose = require('mongoose');
const schema = mongoose.Schema;

const Room = new schema({

    RooId: {
        type: String,
        
    },
    roomType: {
        type: String,
     
    },
    beads: {
        type: Number,
   
    },
    clients: {
        type: Number,
        
    },
    price: {
        type: Number,
      
    },
    description: {
        type: String,
       
    },
    facilities: {
        type: String,
        
    },
    
   RoomImage: {
        type : String,
       
      
    },
    cloudinary_id: {
        type : String,
        
      
    },
    fileName: {
        type : String,
       
    }

   
})

const assignment = mongoose.model('room',Room);
module.exports = assignment;