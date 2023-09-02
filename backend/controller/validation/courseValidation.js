const joi = require('joi');

exports.createValidation = (data) => {
    const schema = joi.object({
        title: joi.string().required(),
        teacher: joi.string().required(),
        cover: joi.string(),
        description: joi.string().required(),
        prerequisite: joi.array(),
        price: joi.number().required(),
        discount: joi.number().default(0),
        courseLevel: joi.string().valid("basic", "middle", "advance"),
        tags: joi.array(),
    });
    return schema.validate(data);
}