const mongoose = require('mongoose');


const teacherSchema = mongoose.Schema({
    fullName: { type: String, require: true },
    bio: { type: String, require: true },
    pic: { type: String},
})

exports.teacherModel = mongoose.model("teachers",teacherSchema);