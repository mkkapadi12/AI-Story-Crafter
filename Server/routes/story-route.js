require("dotenv").config();
const express = require("express");
const router = express.Router();
const storyController = require("../controllers/story-controller");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const authMiddleware = require("../middlewares/auth-middleware");

//Get All the public story
router.get("/public", storyController.getAllStory);

//get user private story
router.get("/private", authMiddleware, storyController.getPrivate);

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

//Add new story
router.route("/add").post(upload.single("image"), storyController.addStory);
router
  .route("/private")
  .post(upload.single("image"), storyController.postPrivateStory);

//Get a single story
router.get("/:id", storyController.getSingleStory);

module.exports = router;
