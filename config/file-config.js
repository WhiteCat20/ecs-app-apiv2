import multer from "multer";
import fs from "fs";

const storage = multer.diskStorage({
  //define the destination of the uploaded file
  destination: (req, file, cb) => {
    //file checking
    let uploadPath = "uploads/";
    switch (file.fieldname) {
      case "foto_barang":
        uploadPath = "uploads/foto_barang/";
        break;
      default:
        break;
    }

    // create the upload folder if it doesn't exist
    fs.mkdirSync(uploadPath, { recursive: true });

    //move the file(s)
    cb(null, uploadPath);
  },
  //define the name of the file
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

//configuring the multer, this enable of multiple files upload with different keys
const upload = multer({ storage: storage }).fields([
  { name: "foto_barang", maxCount: 1 },
]);

export default upload;
