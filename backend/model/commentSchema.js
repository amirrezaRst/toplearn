const mongoose = require('mongoose');

exports.commentSchema = mongoose.Schema({
    fullName: { type: String, require: true },
    profile: { type: String, require: true },
    text: { type: String, require: true },
    time: { type: Date, default: Date.now },
    reply: [mongoose.Schema({
        fullName: { type: String, require: true },
        profile: { type: String, require: true },
        text: { type: String, require: true },
        time: { type: Date, default: Date.now },
    })]
});