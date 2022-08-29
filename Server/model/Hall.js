const mongoose = require('mongoose');
const schema = mongoose.Schema;

const Hall = new schema({

    name: {
        type: String,
        required:false
    },
    hallType: {
        type: String,
        required:false
    },
    Space: {
        type: Number,
        required:false
    },
    Guest: {
        type: Number,
        required:false
    },
    price: {
        type: Number,
        required:false
    },
    description: {
        type: String,
        required:false
    },
    feacture: {
        type: String,
        required:false
    },
    event: {
        type: String,
        required:false
    },
    
 

    hallImage: {
        type : String,
        required :false
      
    },
    cloudinary_id: {
        type : String,
        required :false
      
    },
    fileName: {
        type : String,
        required :false
    }

   
})

const assignment = mongoose.model('hall', Hall);
module.exports = assignment;