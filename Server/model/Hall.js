const mongoose = require('mongoose');
const schema = mongoose.Schema;

const Hall = new schema({

    name: {
        type: String,
        required: true
    },
    hallType: {
        type: String,
        required: true
    },
    Space: {
        type: Number,
        required: true
    },
    Guest: {
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
    feacture: {
        type: String,
        required: true
    },
    event: {
        type: String,
        required: true
    },
    


    hallImage: {
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

const assignment = mongoose.model('hall', Hall);
module.exports = assignment;