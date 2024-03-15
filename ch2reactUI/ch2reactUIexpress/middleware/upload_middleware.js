import multer from "multer";

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, `public/uploads/${file.fieldname}`); //folder to save the file in it
    },
    filename: (req, file, cb) => {
      const uniqueName = `${Date.now()}-${file.originalname}`;
      cb(null, uniqueName); //the name of the file that will be saved on our server
    },
  }),
});

export default upload;
