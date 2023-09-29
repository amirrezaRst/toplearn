const { isValidObjectId } = require("mongoose");
const { userModel } = require("../model/userModel");
const shortid = require("shortid");
const sharp = require('sharp');
const fs = require('fs');
const multer = require('multer');
const path = require('path');

const { createValidation, editBio, editProfile, editInfo } = require("./validation/teacherValidation");


// //! Get Request
exports.teacherList = async (req, res) => {
    const teachers = await userModel.find({ role: "teacher" });

    res.json({ text: "fetch success", teachers });
};

exports.singleTeacher = async (req, res) => {
    if (!isValidObjectId(req.params.id)) return res.status(422).json({ text: "id is not valid" });

    const teacher = await userModel.findById(req.params.id);

    if (teacher.role != "teacher") return res.status(422).json({ status: 404, text: "teacher not found" });
    if (!teacher) return res.status(422).json({ text: "teacher not found" });

    res.json({ text: "fetch success", teacher });
};


exports.teacherLicense = async (req, res) => {
    if (!isValidObjectId(req.params.id)) return res.status(422).json({ text: "id is not valid" });

    const user = await userModel.findById(req.params.id);
    user.role = "teacher";

    await user.save();
    res.json({ text: "license successfully registered" });
}

// ! Post Request


//! Put Request
exports.editInfo = async (req, res) => {
    if (!isValidObjectId(req.params.id)) return res.status(422).json({ text: 'id is not valid' });

    const teacher = await userModel.findById(req.params.id);
    if (teacher.role != "teacher") return res.status(422).json({ status: 404, text: "teacher not found!!!" });
    if (!teacher) return res.status(422).json({ status: 404, text: "teacher not found??" });

    if (editInfo(req.body).error) return res.status(422).json({ status: 422, text: editInfo(req.body).error.message });

    teacher.fullName = req.body.fullName;
    teacher.bio = req.body.bio;
    teacher.socialMedia = req.body.socialMedia;

    await teacher.save();

    res.json({ status: 201, text: "teacher information edited" });
};

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
    }).single("profile");

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
                    .toFile(`./public/profile/${fileName}`)
                    .catch((err) => console.log(err));

                if (editProfile(req.body).error) return res.status(422).json({ text: editProfile(req.body).error.message });

                const teacher = await userModel.findById(req.params.id);
                if (!teacher) return res.status(422).json({ text: "teacher is not found" });

                if (teacher.profile != "anonymous-user.jpg") {
                    fs.unlink(path.join(__dirname, '..', "public", "profile/") + teacher.profile, (err) => {
                        if (err) {
                            throw err;
                        }
                    });
                }

                teacher.profile = fileName;
                await teacher.save();

                res.status(201).json({ message: "teacher created", teacher });
            } else {
                res.status(422).json({ message: "Photo is required, please enter it" });
            }

        }
    })

}


//! Delete Request
exports.deleteTeacher = async (req, res) => {
    if (!isValidObjectId(req.params.id)) return res.status(422).json({ text: "id is not valid" })

    const teacher = await userModel.findByIdAndRemove(req.params.id);
    if (teacher.role != "teacher") return res.status(422).json({ status: 404, text: "teacher not found" });
    if (!teacher) return res.status(422).json({ text: "teacher not found" });

    res.json({ text: "teacher deleted" });
};