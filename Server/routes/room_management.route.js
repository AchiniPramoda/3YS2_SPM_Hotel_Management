const express = require('express');
const cloudinary = require('./../utils/cloud');
const upload = require('./../utils/ImageMulter');
const router = express.Router();

const Room= require('./../model/Room');

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
    .catch(err => err.json(err.message));
} );

//get room by id
router.get('/getroom/:id', async (req, res, next) => {
    await Room.findById(req.params.
    id)
    .then(room => res.json(room))
    .catch(err => err.json(err.message));
} );

//update room by id
router.put('/editroom/:id', upload.single('RoomImage'), async (req, res) => {

    try{

        const room = await Room.findById(req.params.id);
        if(!room){
            return res.status(404).send("Room not found");
        }
        room.RooId = req.body.RooId;
        room.roomType = req.body.roomType;
        room.beads = req.body.beads;
        room.clients = req.body.clients;
        room.price = req.body.price;
        room.description = req.body.description;
        room.facilities = req.body.facilities;
        room.RoomImage = req.body.RoomImage;
        room.cloudinary_id = req.body.cloudinary_id;
        room.fileName = req.body.fileName;
        await room.save();
        res.json("Room Updated Successfully...");
    }
    catch(err){
        res.status(400).send("Error : " + err);
    }
} );
//delete room by id
router.delete('/deleteroom/:id', async (req, res) => {
    try{
        const room = await Room.findById(req.params.id);
        if(!room){
            return res.status(404).send("Room not found");
        }
        await cloudinary.uploader.destroy(room.cloudinary_id, {resource_type: "raw"});
        await room.remove();
        res.json("Room Deleted Successfully...");
    }
    catch(err){
        res.status(400).send("Error : " + err);
    }
} );

module.exports = router;