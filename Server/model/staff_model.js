const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StaffSchema = new Schema({
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    staffid: {type: String, required: true, unique: true},
    phone: {type: String, required: true},
    dateofbirth: {type: Date, required: true},
    email: {type: String, required: true, unique: true},
    possition:{type: String, required: true},
    address: {type: String, required: true},
    wortype: {type: String, required: true},
    comment: {type:String, required:true},
    salary: {type: Number, required: true},

})

const Staff = mongoose.model('Staff', StaffSchema);

module.exports = Staff;