const joi = require('joi');


exports.registerValidation = (data) => {
    const schema = joi.object({
        fullName: joi.string().required().trim().min(3).max(100),
        phone: joi.string().required().trim().min(11).max(11),
        email: joi.string().required().trim(),
        password: joi.string().required().trim()
    })
    return schema.validate(data);
};

exports.loginValidation = (data) => {
    const schema = joi.object({
        email: joi.string().required().trim(),
        password: joi.string().required().trim(),
    })
    return schema.validate(data);

};


exports.editInfoValidation = (data) => {
    const schema = joi.object({
        fullName: joi.string().required(),
        email: joi.string().required(),
        bio: joi.required(),
        gender: joi.string().required().valid("unknow", "male", "female"),
        isVisible: joi.boolean().required()
    })
    return schema.validate(data);
}

exports.editSettingValidation = (data) => {
    const schema = joi.object({
        receiveEmail: joi.boolean().required(),
        receiveMessage: joi.boolean().required()
    })
    return schema.validate(data);
}