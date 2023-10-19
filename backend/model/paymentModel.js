const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    user: {
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users"
        },
        fullName: String,
        email: String,
        phone: String,
    },
    cart: [{ type: mongoose.Schema.Types.ObjectId, ref: "courses" }],
    paymentCode: String,
    success: {
        type: Boolean,
        default: false
    },
    amount: Number,
    refId: String
});

exports.paymentModel = mongoose.model("Payment", paymentSchema);