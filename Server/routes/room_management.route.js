const express = require('express');
const cloudinary = require('./../utils/cloud');
const upload = require('./../utils/ImageMulter');
const router = express.Router();

const Room= require('./../model/Room');
const { response } = require('express');

router.post('/addroom', upload.single('RoomImage'), async (req, res, next) => {
    
        console.log(req.file);
        const result = await cloudinary.uploader.upload(req.file.path, {
             resource_type: "raw", 
             folder : "Template",
             public_id: req.file.originalname
         });
        console.log(result);
        
        const room = new Room({
            RooId: req.body.RooId,
            roomType: req.body.roomType,
            beads: req.body.beads,
            clients: req.body.clients,
            price: req.body.price,
            description: req.body.description,
            facilities: req.body.facilities,
            RoomImage: result.secure_url,
            cloudinary_id: result.public_id,
            fileName : req.body.fileName
        })

        await room
        .save()
        .then(() =>{ console.log('Room Added Successfully'); res.status(200).json({ message: 'Room Added Successfully' })})
        
        .catch(err => res.status(400).send("Error : " + err));

});
//get all rooms
router.get('/getroom', async (req, res, next) => {
    await Room.find()
    .then(room => res.json(room))
    .catch(err => res.status(400).send("Error : " + err));
} );

//get room by id
router.get('/getroom/:id', async (req, res) => {
    await Room.findById(req.params.id)
    .then(room => res.json(room))
    .catch(err => res.status(400).send("Error : " + err));
    
} );

//update room by id
router.put('/editroom/:id', upload.single('RoomImage'), (req, res) => {
        Room
        .findByIdAndUpdate(req.params.id) 
        .then(response =>{
            response.RooId = req.body.RooId;
            response.beads = req.body.beads;
            response.clients = req.body.clients;
            response.price = req.body.price;
            response.description = req.body.description;
            response.facilities = req.body.facilities;
            response.RoomImage = req.body.RoomImage;
            response.cloudinary_id = req.body.cloudinary_id;
            response.fileName = req.body.fileName;
            response.roomType = req.body.roomType;
        
        response
        .save()
        .then(() => res.json("Room Updated Successfully..."))
        .catch((err) => { console.log(err) });
       
        })

    });
//delete room by id
router.delete('/deleteroom/:id', async (req, res) => {
    await Room.findByIdAndDelete(req.params.id)
    .then(() => res.json("Room Deleted Successfully..."))
    .catch(err => err.json(err.message));
} );

module.exports = router;