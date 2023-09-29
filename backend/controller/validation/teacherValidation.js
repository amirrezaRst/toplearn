const joi = require('joi');


exports.editInfo = (data) => {
    const schema = joi.object({
        fullName: joi.string().required(),
        bio: joi.string().required(),
        socialMedia: joi.array()
    })
    return schema.validate(data);
}

exports.editProfile = (data) => {
    const schema = joi.object({
        profile: joi.string()
    })
    return schema.validate(data);
}