const { celebrate, Joi } = require("celebrate");

module.exports = celebrate({
  body: Joi.object()
    .keys({
      bio: {
        photo: Joi.string()
          .trim()
          .max(400)
          .default("https://fakeimg.pl/200x250/282828/eae0d0/?text=Photo"),
        place_of_birth: Joi.string()
          .trim()
          .max(100)
          .regex(/^[a-zA-Z0-9_\-, ]+$/),
        religion: Joi.string()
          .trim()
          .max(100)
          .regex(/^[a-zA-Z_\- ]+$/),
        occupation: Joi.string()
          .trim()
          .max(100)
          .regex(/^[a-zA-Z_\- ]+$/),
        street: Joi.string()
          .trim()
          .max(100)
          .regex(/^[a-zA-Z0-9_\- ]+$/),
        city: Joi.string()
          .trim()
          .max(100)
          .regex(/^[a-zA-Z_\- ]+$/),
        state: Joi.string()
          .trim()
          .valid(
            "Australian Capital Territory",
            "New South Wales",
            "Northern Territory",
            "Queensland",
            "South Australia",
            "Tasmania",
            "Victoria",
            "Western Australia",
            "ACT",
            "NSW",
            "NT",
            "QLD",
            "SA",
            "TAS",
            "VIC",
            "WA"
          ),
        postcode: Joi.number()
          .integer()
          .positive()
          .min(1000)
          .max(9999),
        coords: {
          lat: Joi.number()
            .min(-90)
            .max(90),
          lon: Joi.number()
            .min(-180)
            .max(180)
        },
        age_at_embark: Joi.string()
          .trim()
          .min(2)
          .max(3)
          .regex(/^[0-9]+$/),
        height: Joi.string()
          .trim()
          .regex(/^[0-9]{1,2}\'([ ]?[0-9]{1,2}[\"]?|)$/),
        weight: Joi.string()
          .trim()
          .min(2)
          .max(3)
          .regex(/^[0-9]+$/),
        next_of_kin: Joi.string()
          .trim()
          .max(600)
          .regex(/^[a-zA-Z0-9_\-,\\/ ]+$/),
        prev_military_service: Joi.string()
          .trim()
          .max(100)
          .regex(/^[a-zA-Z0-9_\-,\\/ ]+$/),
        enlist_date: Joi.string()
          .required()
          .regex(/^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/),
        rank: Joi.string()
          .trim()
          .max(100)
          .regex(/^[a-zA-Z0-9_\-,\\/ ]+$/),
        unit: Joi.string()
          .trim()
          .max(100)
          .regex(/^[a-zA-Z0-9_\-,\\/ ]+$/),
        AWM_embark_roll_no: Joi.string()
          .trim()
          .max(100)
          .regex(/^[a-zA-Z0-9_\-,\\/ ]+$/),
        embark_details: Joi.string()
          .trim()
          .max(400)
          .regex(/^[a-zA-Z0-9_\-,\\/ ]+$/),
        summery: Joi.string()
          .trim()
          .max(400)
          .regex(/^[a-zA-Z0-9_\-,\\/ ]+$/)
      }
    })
    .unknown()
});
