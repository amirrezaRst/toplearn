const mongoose = require('mongoose');

const socialSchema = mongoose.Schema({
    name: { type: String, require: true },
    address: { type: String, require: true }
})

const userSchema = mongoose.Schema({
    fullName: { type: String, require: true, minLength: 3, maxLength: 100 },
    // userName: { type: String, require: true,minLength: 3, maxLength: 100 },
    phone: { type: String, require: true, minLength: 11, maxLength: 11 },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    role: { type: String, enum: ["user", "teacher", "admin"], default: "user" },
    profile: { type: String, default: "anonymous-user.jpg" },
    registeredCourses: [{ type: String }],
    favorite: [{ type: mongoose.Schema.Types.ObjectId, ref: "courses" }],
    wallet: { type: Number, default: 0 },
    specialUser: { type: Boolean, default: false },
    expireData: { type: Date },
    bio: { type: String, trim: true, default: null },
    gender: { type: String, enum: ["male", "female", "unknow"], default: "unknow" },
    isVisible: { type: Boolean, default: true },
    socialMedia: [socialSchema],
    cart: [{ type: mongoose.Schema.Types.ObjectId, ref: "courses" }]
})

exports.userModel = mongoose.model("users", userSchema);