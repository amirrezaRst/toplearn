const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    fullName: { type: String, require: true, minLength: 3, maxLength: 100 },
    phone: { type: String, require: true, minLength: 11, maxLength: 11 },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    role: { type: String, enum: ["user", "teacher", "admin"], default: "user" },
    purchasedCourses: [{ type: String }],
    favorite: [{ type: mongoose.Schema.Types.ObjectId }],
    wallet: { type: Number, default: 0 },
    specialUser: { type: Boolean, default: false },
    expireData: { type: Date },
})

exports.userModel = mongoose.model("users", userSchema);