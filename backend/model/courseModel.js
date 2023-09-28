const mongoose = require('mongoose');
const shortid = require('shortid');

const { commentSchema } = require('./commentSchema');

const episodeSchema = mongoose.Schema({
    title: { type: String, require: true },
    description: { type: String, require: true },
    time: { type: Number, require: true },
    free: { type: Boolean, default: true },
    video: { type: String, require: true }
});

const courseSchema = mongoose.Schema({
    title: { type: String, require: true },
    teacher: { type: mongoose.Schema.Types.ObjectId, ref: "teachers" },
    cover: { type: String },
    description: { type: String, require: true },
    prerequisite: [{ type: String }],
    price: { type: Number, require: true },
    specialMember: { type: Boolean, default: false },
    discount: { type: Number, default: 0 },
    courseLevel: { type: String, enum: ["basic", "middle", "advance"], require: true },
    shortUrl: { type: String, default: shortid.generate() },
    tags: [{ type: String }],
    courses: [episodeSchema],
    courseStatus: { type: String, enum: ["started", "finished"], default: "started" },
    lastUpdate: { type: Date, default: Date.now() },
    date: { type: Date, default: Date.now },
    comment: [commentSchema]
});

exports.courseModel = mongoose.model("courses", courseSchema);