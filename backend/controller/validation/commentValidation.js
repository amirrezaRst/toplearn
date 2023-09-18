const joi = require('joi');

exports.newComment = (data) => {
    const schema = joi.object({
        fullName: joi.string().required(),
        profile: joi.string().required(),
        text: joi.string().required(),
        token: joi.string().required()
    });
    return schema.validate(data);
};

exports.replyValidation = (data) => {
    const schema = joi.object({
        fullName: joi.string().required(),
        profile: joi.string().required(),
        text: joi.string().required(),
        token: joi.string().required()
    });
    return schema.validate(data);
}