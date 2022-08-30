const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const StaffSchema = new Schema({
    firstname: {type: String },
    lastname: {type: String },
    staffId: {type: String },
    phone: {type: String},
    dateofbirth: {type: Date },
    staffemail: {type: String},
    possition:{type: String },
    address: {type: String },
    wortype: {type: String },
    comment: {type:String},
    salary: {type: Number },
   

})

const Staff = mongoose.model('staff', StaffSchema);

module.exports = Staff;