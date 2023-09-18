const { isValidObjectId } = require("mongoose");
const axios = require('axios');

const { courseModel } = require("../model/courseModel");
const { userModel } = require('../model/userModel');
const { newComment, replyValidation } = require('./validation/commentValidation');





//! Post Request
exports.addComment = async (req, res) => {
    if (!isValidObjectId(req.params.id)) return res.status(422).json({ status: 422, text: "id is not valid" });

    if (newComment(req.body).error) return res.status(422).json({ status: 422, text: newComment(req.body).error.message });

    //! Captcha validation
    const responseKey = req.body.token;
    if (!responseKey) return res.status(401).json({ status: 401, text: "google recaptcha has not been validated" });


    const course = await courseModel.findById(req.params.id);
    if (!course) return res.status(422).json({ status: 422, text: "course not found" });
    // console.log(req.body.token);
    const option = {
        url: `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.CATCHA_SECRET}&response=${req.body.token}`,
        headers: { "Content-Type": "application/x-www-form-urlencoded", 'json': true }
    };

    await axios.get(option.url).then(async response => {
        if (response.data.success === true) {
            const comment = {
                fullName: req.body.fullName,
                text: req.body.text
            };
            await course.comment.push(comment);
            await course.save();

            return res.json({ status: 201, text: "comment added",  course });
        }
        else {
            res.status(401).json({ status: 401, text: "google recaptcha has not been validated" });
        }
    }).catch(err => {
        res.status(401).json({ status: 401, text: "google recaptcha has not been validated" });
        console.log(err);
    });
}

exports.addReply = async (req, res) => {
    if (!isValidObjectId(req.params.courseId)) return res.status(422).json({ status: 422, text: "course id is not valid" });
    if (!isValidObjectId(req.params.commentId)) return res.status(422).json({ status: 422, text: "comment id is not valid" });

    if (replyValidation(req.body).error) return res.status(422).json({ status: 422, text: replyValidation(req.body).error.message });

    //! Captcha validation
    // const responseKey = req.body.token;
    // if (!responseKey) return res.status(401).json({ status: 401, text: "google recaptcha has not been validated" });

    const course = await courseModel.findById(req.params.courseId);
    if (!course) return res.status(422).json({ status: 422, text: "course not found" });

    const comment = course.comment.findIndex(item => {
        return item._id == req.params.commentId;
    })
    if (comment == -1) {
        return res.status(422).json({ status: 422, text: "comment not found" });
    }


    const option = {
        url: `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.CATCHA_SECRET}&response=${req.body.token}`,
        headers: { "Content-Type": "application/x-www-form-urlencoded", 'json': true }
    };

    await axios.get(option.url).then(async response => {
        if (response.data.success === true) {
            const reply = {
                fullName: req.body.fullName,
                profile: req.body.profile,
                text: req.body.text
            };
            await course.comment[comment].reply.push(reply);
            await course.save();


            return res.json({ status: 201, text: "comment reply added", course });
        }
        else {
            res.status(401).json({ status: 401, text: "google recaptcha has not been validated" });
        }
    }).catch(err => {
        res.status(401).json({ status: 401, text: "google recaptcha has not been validated" });
    });
}


//! Delete Request
exports.deleteComment = async (req, res) => {
    if (!isValidObjectId(req.params.courseId)) return res.status(422).json({ status: 422, text: "course id is not valid" });
    if (!isValidObjectId(req.params.commentId)) return res.status(422).json({ status: 422, text: "comment id is not valid" });

    const course = await courseModel.findById(req.params.courseId);
    if (!course) return res.status(422).json({ status: 422, text: "course not found" });
    const comment = course.comment.id(req.params.commentId);
    if (!comment) return res.status(422).json({ status: 404, text: "comment not found" })
    else if (comment) comment.remove();

    await course.save();

    res.json({ status: 200, text: "comment deleted successfully" });
}