const mongoose = require('mongoose');
const schema = mongoose.Schema;

const Hall = new schema({
    hallID:{
        type:String,
    },
    name: {
        type: String,
       
    },
    hallType: {
        type: String,
        
    },
    Space: {
        type: Number,
        
    },
    Guest: {
        type: Number,
     
    },
    price: {
        type: Number,
    
    },
    description: {
        type: String,
        
    },
    feacture: {
        type: String,
        required:true
    },
    event: {
        type: String,
        required:true
    },
    
    hallImage: {
        type : String,
       
      
    },
    cloudinary_id: {
        type : String,
     
      
    },
    fileName: {
        type : String,
      
    }

   
})

const Halls = mongoose.model('hall', Hall);
module.exports = Halls;