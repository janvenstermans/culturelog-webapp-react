const mongoose = require('mongoose')

const typeSchema = mongoose.Schema({
    name: {type:String, required:true}
},
{
    timestamps: true
})

module.exports = mongoose.model('Type', typeSchema)