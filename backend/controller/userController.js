const { isValidObjectId } = require("mongoose");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { userModel } = require("../model/userModel");
const { registerValidation, loginValidation } = require('./validation/userValidation');
const Joi = require("joi");


//! Get Request
exports.userList = async (req, res) => {
    const users = await userModel.find();
    res.json({ text: "fetch success", users });
};

exports.singleUser = async (req, res) => {
    if (!isValidObjectId(req.params.id)) return res.status(422).json({ text: "id is not valid" });

    const user = await userModel.findById(req.params.id).populate("favorite");
    if (!user) return res.status(422).json({ text: "user not found" })

    res.json({ text: "fetch success", user });
};

exports.addToFavorite = async (req, res) => {
    if (!isValidObjectId(req.params.userId)) return res.status(422).json({ status: 422, text: "user id is not valid" });
    if (!isValidObjectId(req.params.courseId)) return res.status(422).json({ status: 422, text: "course id is not valid" });

    const user = await userModel.findById(req.params.userId).populate("favorite");
    if (!user) return res.status(422).json({ status: 422, text: "user not found" });

    const itemIndex = user.favorite.findIndex(item => {
        return item._id == req.params.courseId
    })

    if (itemIndex > -1) {
        return res.status(203).json({ text: "The product has already been added" });
    }
    else {
        user.favorite.push(req.params.courseId);
    }

    await user.save();

    const newUser = await userModel.findById(req.params.userId).populate("favorite");

    res.json({ status: 201, text: "course added", user: newUser });
};

exports.deleteToFavorite = async (req, res) => {
    if (!isValidObjectId(req.params.userId)) return res.status(422).json({ status: 422, text: "user id is not valid" });
    if (!isValidObjectId(req.params.courseId)) return res.status(422).json({ status: 422, text: "course id is not valid" });


    const user = await userModel.findById(req.params.userId).populate("favorite");
    if (!user) return res.status(422).json({ status: 422, text: "user not found" });

    const itemIndex = user.favorite.findIndex(item => {
        return item._id == req.params.courseId
    })

    if (itemIndex > -1) {
        await user.favorite.splice(itemIndex, 1);
    }
    else {
        return res.status(422).json({ text: "course not found" });
    }

    await user.save();

    res.json({ status:201,text: "course removed", user })
}



//! Post Request
exports.register = async (req, res) => {
    if (registerValidation(req.body).error) return res.status(422).json({ text: registerValidation(req.body).error.message });

    const user = await userModel.findOne({ email: req.body.email });
    if (user) {
        return res.status(422).json({ status: 422, text: "Registered email" });
    }

    const newUser = new userModel({
        fullName: req.body.fullName,
        phone: req.body.phone,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
    })
    await newUser.save();

    res.status(201).json({ text: "user created", user: newUser });
}

exports.login = async (req, res) => {
    if (loginValidation(req.body).error) return res.status(422).json({ text: loginValidation(req.body).error.message });

    const user = await userModel.findOne({ email: req.body.email });
    if (!user) return res.status(422).json({ status: 422, text: "email or password is not valid" });

    const verifyPassword = bcrypt.compareSync(req.body.password, user.password);
    if (!verifyPassword) return res.status(422).json({ status: 422, text: "email or password is not valid" });

    const tokenData = {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        role: user.role
    };
    const token = jwt.sign(tokenData, process.env.JWT_SECRET)

    res.header("Access-Control-Expose-headers", "x-auth-token").header("x-auth-token", token).json({ text: "login successfully", user });
}



//! Delete Request
exports.deleteUser = async (req, res) => {
    if (!isValidObjectId(req.params.id)) return res.status(422).json({ text: "id is not valid" });

    const user = await userModel.findByIdAndRemove(req.params.id);
    if (!user) return res.status(422).json({ text: "user not found" });

    res.json({ text: "user deleted successfully" });
}