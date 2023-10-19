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

