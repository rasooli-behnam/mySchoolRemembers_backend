const { celebrate, Joi } = require("celebrate");

module.exports = celebrate({
  body: Joi.object()
    .keys({
      event: {
        name: Joi.string()
          .min(1)
          .max(30)
          .required(),
        date: Joi.string()
          .required()
          .regex(/^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/),
        coords: {
          lat: Joi.number()
            .min(-90)
            .max(90)
            .required(),
          lon: Joi.number()
            .min(-180)
            .max(180)
            .required()
        }
      }
    })
    .unknown()
});
