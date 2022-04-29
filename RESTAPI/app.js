const express = require("express");
const app = express();
const cors = require("cors");
const multer = require("multer");
const port = 3000;

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "./public"),
  filename: (req, file, cb) => cb(null, file.originalname),
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype !== "image/jpeg" && file.mimetype !== "image/png") cb(null, false);
  else cb(null, true);
};

const upload = multer({ storage: storage, fileFilter: fileFilter }).single("image");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/images", express.static("public"));

app.post("/upload", upload, (req, res) => {
  if (!req.file) {
    res.status(400).json({
      message: "File upload failed",
    });
  } else {
    res.status(201).json({
      message: "File uploaded successfully",
    });
  }
});

app.listen(port, () => {
  console.log(`Running at http://localhost:${port}`);
});
