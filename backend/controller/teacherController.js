const { isValidObjectId } = require("mongoose");
const shortid = require("shortid");
const sharp = require('sharp');
const fs = require('fs');
const multer = require('multer');
const path = require('path');

const { teacherModel } = require("../model/teacherModel");
const { createValidation, editBio, editProfile } = require("./validation/teacherValidation");


//! Get Request
exports.teacherList = async (req, res) => {
    const teachers = await teacherModel.find();

    res.json({ text: "fetch success", teachers });
}

exports.singleTeacher = async (req, res) => {
    if (!isValidObjectId(req.params.id)) return res.status(422).json({ text: "id is not valid" });

    const teacher = await teacherModel.findById(req.params.id);
    if (!teacher) return res.status(422).json({ text: "teacher not found" });

    res.json({ text: "fetch success", teacher });
};


//! Post Request
exports.createTeacher = async (req, res) => {
    const fileFilter = (req, file, cb) => {
        if (file.mimetype == "image/jpeg") {
            cb(null, true);
        }
        else if (file.mimetype == "image/jpg") {
            cb(null, true);
        }
        else {
            cb("The file extension must be jpg or jpeg", false);
        }
    };

    const upload = multer({
        limits: { fileSize: 4000000 },
        fileFilter: fileFilter,
    }).single("pic");

    upload(req, res, async (err) => {
        if (err) {
            if (err.code === "LIMIT_FILE_SIZE") {
                return res
                    .status(422)
                    .json({ text: "The size of the photo should not be more than 4 MB" });
            }
            res.status(422).send(err);
        } else {

            if (req.file) {
                const fileName = `${shortid.generate()}_${req.file.originalname}`;
                await sharp(req.file.buffer)
                    .jpeg({
                        quality: 70,
                    })
                    .resize(255, 255)
                    .toFile(`./public/teacher/${fileName}`)
                    .catch((err) => console.log(err));

                if (createValidation(req.body).error) return res.status(422).json({ text: createValidation(req.body).error.message });

                const newTeacher = new teacherModel({
                    fullName: req.body.fullName,
                    bio: req.body.bio,
                })

                newTeacher.pic = fileName;

                await newTeacher.save();

                res.status(201).json({ message: "teacher created", teacher: newTeacher });
            } else {
                res.status(422).json({ message: "Photo is required, please enter it" });
            }
        }
    })
}




//! Put Request
exports.editBio = async (req, res) => {
    if (!isValidObjectId(req.params.id)) return res.status(422).json({ text: "id is not valid" });
    if (editBio(req.body).error) return res.status(422).json({ text: editBio(req.body).error.message });

    const teacher = await teacherModel.findById(req.params.id);
    if (!teacher) return res.status(422).json({ text: "teacher is not found" });

    teacher.bio = req.body.bio;

    await teacher.save();

    res.json({ text: "bio edited", teacher });
}

exports.editProfile = async (req, res) => {
    if (!isValidObjectId(req.params.id)) return res.status(422).json({ text: "id is not valid" });

    const fileFilter = (req, file, cb) => {
        if (file.mimetype == "image/jpeg") {
            cb(null, true);
        }
        else if (file.mimetype == "image/jpg") {
            cb(null, true);
        }
        else {
            cb("The file extension must be jpg or jpeg", false);
        }
    };

    const upload = multer({
        limits: { fileSize: 4000000 },
        fileFilter: fileFilter,
    }).single("pic");

    upload(req, res, async (err) => {
        if (err) {
            if (err.code === "LIMIT_FILE_SIZE") {
                return res
                    .status(422)
                    .json({ text: "The size of the photo should not be more than 4 MB" });
            }
            res.status(422).send(err);
        } else {

            if (req.file) {
                const fileName = `${shortid.generate()}_${req.file.originalname}`;
                await sharp(req.file.buffer)
                    .jpeg({
                        quality: 70,
                    })
                    .resize(255, 255)
                    .toFile(`./public/teacher/${fileName}`)
                    .catch((err) => console.log(err));

                if (editProfile(req.body).error) return res.status(422).json({ text: editProfile(req.body).error.message });

                const teacher = await teacherModel.findById(req.params.id);
                if (!teacher) return res.status(422).json({ text: "teacher is not found" });

                fs.unlink(path.join(__dirname, '..', "public", "teacher/") + teacher.pic, (err) => {
                    if (err) {
                        throw err;
                    }
                });

                teacher.pic = fileName;
                await teacher.save();

                res.status(201).json({ message: "teacher created", teacher: teacher });
            } else {
                res.status(422).json({ message: "Photo is required, please enter it" });
            }

        }
    })

}


//! Delete Request
exports.deleteTeacher = async (req, res) => {
    if (!isValidObjectId(req.params.id)) return res.status(422).json({ text: "id is not valid" })

    const teacher = await teacherModel.findByIdAndRemove(req.params.id);
    if (!teacher) return res.status(422).json({ text: "teacher not found" });

    res.json({ text: "teacher deleted" });
};