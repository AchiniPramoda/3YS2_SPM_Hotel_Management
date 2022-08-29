const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StaffSchema = new Schema({
    lastname: {type: String, required: false},
    staffid: {type: String, required: false, unique: false},
    phone: {type: String, required: false},
    dateofbirth: {type: Date, required: false},
    email: {type: String, required: false, unique: false},
    firstname: {type: String, required: false},
    possition:{type: String, required: false},
    address: {type: String, required: false},
    wortype: {type: String, required: false},
    comment: {type:String, required:false},
    salary: {type: Number, required: false},
   

})

const Staff = mongoose.model('staff', StaffSchema);

module.exports = Staff;