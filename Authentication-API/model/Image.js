const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    url: String,
    email: {type: String, required: true},
});

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;