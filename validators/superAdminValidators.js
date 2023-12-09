const Joi = require("joi");

const createSuperAdminValidator = (req, res, next) => {
    const createSuperAdminValidator = Joi.object({
        name: Joi.string().required().label('name'),
        email: Joi.string().required().label('email'),
        password: Joi.string().required().label('password'),
        mobile: Joi.number().required().label('mobile'),
        role: Joi.string().required().label('role')
    })
    const { name, email, password, mobile, role } = req.body
    const payload = {
        ...req.payload,
        apiPayload: {
            name, email, password, mobile, role
        }
    }
    const { error } = createSuperAdminValidator.validate(payload.apiPayload);
    if (error) {
        return res.status(400).json({ message: error.message })
    }
    req.payload = payload;
    next()
}

const superAdminLoginValidator = (req, res, next) => {
    const superAdminLoginValidatorSchema = Joi.object({
        email: Joi.string().required().label('email'),
        password: Joi.string().required().label('Password')
    })
    const { email, password } = req.body;
    const payload = {
        ...req.payload,
        apiPayload: {
            email: email,
            password: password
        }
    }
    const { error } = superAdminLoginValidatorSchema.validate(payload.apiPayload);
    if (error) {
        return res.status(400).json({ message: error.message })
    }
    req.payload = payload;
    next();
}

module.exports = { superAdminLoginValidator, createSuperAdminValidator }