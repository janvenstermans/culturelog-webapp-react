const mongoose = require('mongoose')

const experienceSchema = mongoose.Schema({
    type: String, 
    medium: String, 
    name: {type:String, required:true}, 
    date: { type: Date, default: Date.now },
},
{
    timestamps: true
})

module.exports = mongoose.model('Experience', experienceSchema)