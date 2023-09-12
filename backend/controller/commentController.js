const { isValidObjectId } = require("mongoose");

const { courseModel } = require("../model/courseModel");
const { userModel } = require('../model/userModel');
const { newComment } = require('./validation/commentValidation');

//! Post Request
exports.addComment = async (req, res) => {
    if (!isValidObjectId(req.params.id)) return res.status(422).json({ status: 422, text: "id is not valid" });

    if (newComment(req.body).error) return res.status(422).json({ status: 422, text: newComment(req.body).error.message });

    const course = await courseModel.findById(req.params.id);
    if (!course) return res.status(422).json({ status: 422, text: "course not found" });

    const comment = {
        fullName: req.body.fullName,
        text: req.body.text,
    }

    await course.comment.push(comment);
    await course.save();

    res.json({ status: 201, text: "comment added", comment: comment, course });
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