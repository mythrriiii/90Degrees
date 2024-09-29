const express = require("express");
const userCtrl = require("../controller/user");
const isAuthenticated = require("../middlewares/isAuth");
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });

const router = express.Router();

//!Register
router.post("/api/users/register", userCtrl.register);
router.post("/api/users/login", userCtrl.login);
router.get("/api/users/profile", isAuthenticated, userCtrl.profile);
router.post('/upload', upload.single('photo'), userCtrl.uploadImage);

module.exports = router;