const { isValidObjectId } = require('mongoose');
const multer = require('multer');
const path = require('path');
const sharp = require('sharp');
const shortid = require('shortid');
const { courseModel } = require('../model/courseModel');
const { createValidation, newEpisodeValidation } = require('./validation/courseValidation');
const fs = require('fs');
const { getVideoDurationInSeconds } = require('get-video-duration')

//! Get Request
exports.courseList = async (req, res) => {
    // const courses = await courseModel.find().populate("teacher").select("_id title price discount cover courseTime"); //todo must be edit
    const courses = await courseModel.find().populate("teacher"); //todo must be edit

    res.json({ text: "fetch success", courses });
}

exports.singleCourse = async (req, res) => {
    const fetchShort = await courseModel.findOne({ shortUrl: req.params.id }).populate("teacher");
    if (!fetchShort) {
        if (!isValidObjectId(req.params.id)) return res.status(422).json({ text: "id is not valid" });
        const course = await courseModel.findById(req.params.id).populate("teacher");
        if (!course) return res.status(422).json({ text: "user not found" })

        return res.json({ text: 'fetch success', course })
    }
    else {
        res.json({ text: "fetch success", course: fetchShort })
    }
}

exports.downloadEpisode = async (req, res) => {
    const file = path.join(__dirname, "../", "public", "courses", req.params.url);
    fs.readFile(file, ({}), (filename, buff) => {
        if (buff == undefined) return res.status(422).json({ status: 404, text: "file not found" });
    });
    
    res.download(file);
}


//! Post Request
exports.createCourse = async (req, res) => {

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
        limits: { fileSize: 8000000 },
        fileFilter: fileFilter,
    }).single("cover");

    upload(req, res, async (err) => {
        if (err) {
            if (err.code === "LIMIT_FILE_SIZE") {
                return res
                    .status(422)
                    .json({ text: "The size of the photo should not be more than 8 MB" });
            }
            res.status(422).send(err);
        } else {

            if (req.file) {
                const fileName = `${shortid.generate()}_${req.file.originalname}`;
                await sharp(req.file.buffer)
                    .jpeg({
                        quality: 70,
                    })
                    .resize(700, 450)
                    .toFile(`./public/cover/${fileName}`)
                    .catch((err) => console.log(err));

                if (createValidation(req.body).error) return res.status(422).json({ text: createValidation(req.body).error.message });

                const newCourse = new courseModel({
                    title: req.body.title,
                    teacher: req.body.teacher,
                    description: req.body.description,
                    prerequisite: req.body.prerequisite,
                    price: req.body.price,
                    discount: req.body.discount,
                    courseLevel: req.body.courseLevel,
                    tags: req.body.tags
                })

                newCourse.cover = fileName;

                await newCourse.save();

                res.status(201).json({ message: "course created", course: newCourse });
            } else {
                res.status(422).json({ message: "Photo is required, please enter it" });
            }
        }
    })
}


//? course parts
exports.addEpisode = async (req, res) => {
    if (!isValidObjectId(req.params.id)) return res.status(422).json({ status: 422, text: "id is not valid" });

    const course = await courseModel.findById(req.params.id);
    if (!course) return res.status(422).json({ status: 422, text: "course not found" });

    const videoStorage = multer.diskStorage({
        destination: 'public/courses',
        filename: (req, file, cb) => {
            cb(null, `course_e${course.courses.length + 1}_${shortid.generate()}${path.extname(file.originalname)}`)
        }
    });

    const upload = multer({
        storage: videoStorage,
        limits: {
            fileSize: 10000000 // 10000000 Bytes = 10 MB
        },
        fileFilter(req, file, cb) {
            // upload only mp4 and mkv format
            if (!file.originalname.match(/\.(mp4|MPEG-4|mkv)$/)) {
                return cb(new Error('Please upload a video'));
            }
            cb(undefined, true)
        }
    }).single("video");


    upload(req, res, async (err) => {
        if (err) {
            if (err.code === "LIMIT_FILE_SIZE") {
                return res
                    .status(422)
                    .json({ text: "The size of the photo should not be more than 10 MB" });
            }
            res.status(422).send(err);
        }
        else {
            if (req.file) {
                if (newEpisodeValidation(req.body).error) return res.status(422).json({ status: 422, text: newEpisodeValidation(req.body).error.message });

                var newEpisode = {
                    title: req.body.title,
                    description: req.body.description,
                    free: req.body.free,
                    video: req.file.filename
                };

                await getVideoDurationInSeconds(path.join(__dirname, "../", "public", "courses", req.file.filename)).then((duration) => {
                    newEpisode.time = Math.floor(duration);
                })

                course.courses.push(newEpisode);
                course.lastUpdate = Date.now();
                await course.save();

                res.status(201).json({ message: "episode added to courses" });
            } else {
                res.status(422).json({ status: 422, message: "video is required, please enter it" });
            }
        }
    })
}



//! Delete Request
exports.deleteCourse = async (req, res) => {
    if (!isValidObjectId(req.params.id)) return res.status(422).json({ text: "id is not valid" });

    const course = await courseModel.findByIdAndRemove(req.params.id);
    if (!course) return res.status(422).json({ text: "course not found" });

    res.json({ text: "course deleted" });
}