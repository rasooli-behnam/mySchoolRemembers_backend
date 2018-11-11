const { celebrate, Joi } = require("celebrate");

module.exports = celebrate({
  query: Joi.object()
    .keys({
      filterBy: Joi.string()
        .required()
        .min(3)
        .max(10)
        .trim()
        .regex(/^[a-zA-Z]+$/),
      condition: Joi.string()
        .required()
        .min(3)
        .max(30)
        .trim()
        .regex(/^[a-zA-Z0-9_ ]+$/)
    })
    .unknown()
});
