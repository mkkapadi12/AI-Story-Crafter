require("dotenv").config();
const express = require("express");
const authControllers = require("../controllers/auth-controller");
const authMiddleware = require("../middlewares/auth-middleware");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

const router = express.Router();

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

// Configure Multer storage with Cloudinary
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "uploads", // Cloudinary folder name
    allowed_formats: ["jpg", "jpeg", "png"],
  },
});

const upload = multer({ storage });

//Home of Auth Route :
router.route("/").get(authControllers.home);

//Register Route :
router.route("/register").post(authControllers.register);

//Login Route :
router.route("/login").post(authControllers.login);

//user Route :
router.route("/user").get(authMiddleware, authControllers.user);

//update profile Route :
router
  .route("/update")
  .patch(authMiddleware, upload.single("image"), authControllers.updateProfile);

module.exports = router;
