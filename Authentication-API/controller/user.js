const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../model/User");
const Image = require('../model/Image');
const AWS = require('aws-sdk');
require('dotenv').config();

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const uploadImage = async (req, res) => {
  const file = req.file;
  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: `${Date.now()}-${file.originalname}`,
    Body: file.buffer,
    ContentType: file.mimetype,
  };

  try {
    const s3Result = await s3.upload(params).promise();
    const imageUrl = s3Result.Location;

    // Save image URL to MongoDB
    const image = new Image({ url: imageUrl });
    await image.save();

    res.json({ imageUrl });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error uploading image' });
  }
};

const userCtrl = {
  uploadImage: asyncHandler(async (req, res) => {
    const file = req.file;
    const params = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: `${Date.now()}-${file.originalname}`,
      Body: file.buffer,
      ContentType: file.mimetype,
    };

    try {
      const s3Result = await s3.upload(params).promise();
      const imageUrl = s3Result.Location;

      // Save image URL to MongoDB
      const image = new Image({ url: imageUrl, email: req.body.email });
      await image.save();

      res.json({ imageUrl });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error uploading image' });
    }
  }),
  //!Register
  register: asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    console.log({ email, password });
    //!Validations
    if (!email || !password) {
      throw new Error("Please all fields are required");
    }
    //! check if user already exists
    const userExits = await User.findOne({ email });
    // console.log("userExits", userExits);
    if (userExits) {
      throw new Error("User already exists");
    }
    //! Hash the user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    //!Create the user
    const userCreated = await User.create({
      password: hashedPassword,
      email,
    });
    //!Send the response
    console.log("userCreated", userCreated);
    res.json({
      username: userCreated.username,
      email: userCreated.email,
      id: userCreated.id,
    });
  }),
  //!Login
  login: asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    //!Check if user email exists
    const user = await User.findOne({ email });
    console.log("user backend", user);
    if (!user) {
      throw new Error("Invalid credentials");
    }
    //!Check if user password is valid
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error("Invalid credentials");
    }
    //! Generate the token
    const token = jwt.sign({ id: user._id }, "anyKey", { expiresIn: "30d" });
    //!Send the response
    res.json({
      message: "Login success",
      token,
      id: user._id,
      email: user.email,
      username: user.username,
    });
  }),
  //!Profile
  profile: asyncHandler(async (req, res) => {
    //Find the user
    const user = await User.findById(req.user).select("-password");
    res.json({ user });
  }),
};
module.exports = userCtrl;