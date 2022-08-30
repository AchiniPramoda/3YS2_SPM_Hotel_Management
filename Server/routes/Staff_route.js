const express = require('express');
const router = express.Router();
const Staff = require('../model/staff');



// router.post('/addstaff',  async (req, res, next) => {
    
    
//     const staff = new Staff({
//         firstname: req.body.firstname,
//         lastname: req.body.lastname,
//         staffId: req.body.staffId,
//         phone: req.body.phone,
//         dateofbirth: req.body.dateofbirth,
//         staffemail: req.body.staffemail,
//         possition: req.body.possition,
//         address: req.body.address,
//         wortype: req.body.wortype,
//         comment: req.body.comment,
//         salary: req.body.salary
//     })

//     await staff
//     .save()
//     .then(() =>{ console.log('Room Added Successfully'); res.status(200).json({ message: 'Room Added Successfully' })})
    
//     .catch(err => res.status(400).send("Error : " + err));

// });

router.post('/addstaff', async (req, res) => {

    const staff = new Staff({

        firstname: req.body.firstname,
        lastname: req.body.lastname,
        staffId: req.body.staffId,
        phone: req.body.phone,
        dateofbirth: req.body.dateofbirth,
        staffemail: req.body.staffemail,
        possition: req.body.possition,
        address: req.body.address,
        wortype: req.body.wortype,
        comment: req.body.comment,
        salary: req.body.salary

    });

    await staff
    .save()
    .then(() => res.json("Staff Added Successfully..."))
    .catch((err) => { console.log(err) });

});

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