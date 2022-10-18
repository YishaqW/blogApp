const mongoose = require('mongoose')


const blogSchema = new mongoose.Schema({
    title: {type: String, required: true},
    body: {type: String, required: true},
    author: {type: String, required: true},
    // image: {type: image, required: false },
    sponsored: {type: Boolean, default: false},
}, 
{ timestamps: { createdAt: 'created_at' } })


module.exports = mongoose.model('Blog', blogSchema)