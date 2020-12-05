const multer = require('multer');


const MIME_TYPES = {
  'image/jpg': 'jpg',
  'image/jpeg': 'jpg',
  'image/png': 'png'
};

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, './images');
  },
  filename: (req, file, callback) => {
    const name = file.originalname.split(' ').join('_');
    const extension = MIME_TYPES[file.mimetype];
    let index=name.indexOf('.');
    let name1=name.slice(0,index);

 
    
    callback(null, name1 + Date.now() + '.' + extension);
  }
});

module.exports=multer({storage: storage}).single('photo');
