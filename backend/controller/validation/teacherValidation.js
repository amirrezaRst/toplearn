const joi = require('joi');

exports.createValidation = (data) => {
    const schema = joi.object({
        fullName: joi.string().required(),
        bio: joi.string().required(),
        pic: joi.string()
    })
    return schema.validate(data);
}

exports.editBio = (data) => {
    const schema = joi.object({
        bio: joi.string().required()
    })
    return schema.validate(data);
}

exports.editProfile = (data) => {
    const schema = joi.object({
        pic: joi.string()
    })
    return schema.validate(data);
}