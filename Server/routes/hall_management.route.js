const express = require('express');
const cloudinary = require('./../utils/cloud');
const upload = require('../utils/ImageMulter1')
const router = express.Router();

const Hall= require('./../model/Hall');

router.post('/add', upload.single('hallImage'), async (req, res, next) => {
    
    console.log(req.file);
    const result = await cloudinary.uploader.upload(req.file.path, {
         resource_type: "raw", 
         folder : "Template",
         public_id: req.file.originalname
     });
    console.log(result);
    const hall = new Hall({
                      hallID:req.body.hallID,
                      name : req.body.name,
                      hallType : req.body.hallType,
                      Space : req.body.Space,
                      Guest : req.body.Guest,
                      price : req.body.price,
                      description : req.body.description,
                      feacture : req.body.feacture,
                      event : req.body.event,
                      hallImage : result.secure_url,
                      cloudinary_id : result.public_id,
                      fileName : req.body.fileName
                
        
                })
  

    await hall
    .save()
    .then(() =>{ console.log('hall Added Successfully'); res.status(200).json({ message: 'Room Added Successfully' })})
    
    .catch(err => res.status(400).send("Error : " + err));

});
//get all halls
router.get('/get', async (req, res, next) => {
    await Hall.find()
    .then(hall => res.json(hall))
    .catch(err => err.json(err.message));
} );

//get hall by id
router.get('/gethall/:id', async (req, res) => {
    await Hall.findById(req.params.id)
    .then(hall => res.json(hall))
    .catch(err => res.status(400).send("Error : " + err));
    
} );




//
//update room by id
router.put('/edit/:id', upload.single('hallImage'), (req, res) => {
        Hall
    .findByIdAndUpdate(req.params.id) 
    .then(response =>{
        response.hallID = req.body.hallID;
        response.name = req.body.name;
        response.hallType = req.body.hallType;
        response.Space = req.body.Space;
        response.Guest = req.body.Guest;
        response.price = req.body.price;
        response.description = req.body.description;
        response.feacture = req.body.feacture;
        response.event = req.body.event;
        response.hallImage = req.body.hallImage;
        response.cloudinary_id = req.body.cloudinary_id;
        response.fileName = req.body.fileName;
       
    
    response
    .save()
    .then(() => res.json("Room Updated Successfully..."))
    .catch((err) => { console.log(err) });
   
    })

});

router.delete('/deletehall/:id', async (req, res) => {
    await Hall.findByIdAndDelete(req.params.id)
    .then(() => res.json("Hall Deleted Successfully..."))
    .catch(err => err.json(err.message));
} );

module.exports = router;

