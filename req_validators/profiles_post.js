const { celebrate, Joi } = require("celebrate");

module.exports = celebrate({
  body: Joi.object()
    .keys({
      reg_no: Joi.string()
        .required()
        .trim()
        .min(1)
        .max(10)
        .regex(/^[0-9]+$/),
      battalion: Joi.string()
        .required()
        .trim()
        .min(3)
        .max(100)
        .regex(/^[a-zA-Z0-9_\-,.\\/ ]+$/),
      name: Joi.string()
        .required()
        .min(3)
        .max(60)
        .trim()
        .regex(/^[a-zA-Z_, ]+$/)
    })
    .unknown()
});
