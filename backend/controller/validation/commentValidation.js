const joi = require('joi');

exports.newComment = (data) => {
    const schema = joi.object({
        fullName: joi.string().required(),
        text: joi.string().required(),
    })
    return schema.validate(data);
}

