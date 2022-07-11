const mongoose = require('mongoose')
var Schema = mongoose.Schema;

const experienceSchema = Schema({
    // type_id: { type:Schema.Types.ObjectId, required:true},
    // type: { type:String, required:true},
    // medium_id: Schema.Types.ObjectId,
    name: { type:String, required:true}, 
    date: { type: Date, default: Date.now },
},
{
    timestamps: true
})

module.exports = mongoose.model('Experience', experienceSchema)