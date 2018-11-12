const { celebrate, Joi } = require("celebrate");

module.exports = celebrate({
  body: Joi.object()
    .keys({
      name: Joi.string()
        .required()
        .min(3)
        .max(60)
        .trim()
        .regex(/^[a-zA-Z_, ]+$/)
    })
    .unknown()
});
