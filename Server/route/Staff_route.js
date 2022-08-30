const express = require('express');
const router = express.Router();
const Staff = require('../model/staff_model');

router.post('/addstaff', (req, res) => {
    const staff = new Staff({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        staffid: req.body.staffid,
        phone: req.body.phone,
        dateofbirth: req.body.dateofbirth,
        email: req.body.email,
        possition: req.body.possition,
        address: req.body.address,
        wortype: req.body.wortype,
        comment: req.body.comment,
        salary: req.body.salary
    });
    staff
    .save()
    .then(() => res.json("Staff Added Successfully..."))
    .catch((err) => { console.log(err) });
} );

router.get('/viewstaff', (req, res) => {
    Staff
    .find()
    .then(response => res.json(response))
    .catch((err) => res.json(err.message));
});

router.get('/viewstaff/:id', (req, res) => {
    Staff
    .findById(req.params.id)
    .then(response => res.json(response))
    .catch((err) => res.json(err.message));
})

router.delete('/delete/:id', (req, res) => {
    Staff
    .findByIdAndDelete(req.params.id)
    .then(() => res.json("Staff deleted successfully..."))
    .catch((err) => res.json(err.message));
});

router.put('/updatestaff/:id', (req, res) => {
    Staff
    .findByIdAndUpdate(req.params.id)
    .then(response => {
        response.firstname = req.body.firstname,
        response.lastname = req.body.lastname,
        response.staffid = req.body.staffid,
        response.phone = req.body.phone,
        response.dateofbirth = req.body.dateofbirth,
        response.email = req.body.email,
        response.possition = req.body.possition,
        response.address = req.body.address,
        response.wortype = req.body.wortype,
        response.comment = req.body.comment,
        response.salary = req.body.salary
      
        response
        .save()
        .then(() => res.json("Staff Updated Successfully..."))
        .catch((err) => res.json(err.message));
    })
    .catch((err) => res.json(err.message));
});


module.exports = router;