const multer = require('multer');
const path = require('path');

module.exports = multer({
    storage : multer.diskStorage({ }),

    fileFilter : (req, file, ab) => {
        let ext = path.extname(file.originalname);

        if(ext !==".png" && ext !==".jpg" && ext !==".jpeg"){
            ab(new Error("File type is not supported"));
            return;
        }
       ab(null, file);
    }    
})