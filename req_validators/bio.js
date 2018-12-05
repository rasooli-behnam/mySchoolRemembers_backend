const { celebrate, Joi } = require("celebrate");

module.exports = celebrate({
  body: Joi.object()
    .keys({
      bio: {
        alias: Joi.string()
          .max(60)
          .trim()
          .regex(/^[a-zA-Z_, ]+$/),
        photo: Joi.string()
          .trim()
          .max(400)
          .default("https://fakeimg.pl/200x250/282828/eae0d0/?text=Photo"),
        place_of_birth: Joi.string()
          .trim()
          .max(100)
          .regex(/^[a-zA-Z0-9_\-, ]+$/),
        date_of_birth: Joi.string()
          .max(20)
          .regex(/^[a-zA-Z0-9_\-,.\\/ ]+$/),
        date_of_death: Joi.string()
          .max(20)
          .regex(/^[a-zA-Z0-9_\-,.\\/ ]+$/),
        religion: Joi.string()
          .trim()
          .max(100)
          .regex(/^[a-zA-Z_\- ]+$/),
        occupation: Joi.string()
          .trim()
          .max(100)
          .regex(/^[a-zA-Z_\- ]+$/),
        marital_status: Joi.string()
          .max(60)
          .trim()
          .regex(/^[a-zA-Z ]+$/),
        fate: Joi.string()
          .trim()
          .max(400)
          .regex(/^[a-zA-Z0-9_\-,.\\/ ]+$/),
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
          .max(10)
          .regex(/^[a-zA-Z0-9, ]+$/),
        next_of_kin: Joi.string()
          .trim()
          .max(600)
          .regex(/^[a-zA-Z0-9_\-,.\\/ ]+$/),
        prev_military_service: Joi.string()
          .trim()
          .max(100)
          .regex(/^[a-zA-Z0-9_\-,.\\/ ]+$/),
        enlist_date: Joi.string()
          .max(20)
          .regex(/^[a-zA-Z0-9_\-,.\\/ ]+$/),
        rank: Joi.string()
          .trim()
          .max(100)
          .regex(/^[a-zA-Z0-9_\-,.\\/ ]+$/),
        AWM_embark_roll_no: Joi.string()
          .trim()
          .max(100)
          .regex(/^[a-zA-Z0-9_\-,.\\/ ]+$/),
        embark_details: Joi.string()
          .trim()
          .max(400)
          .regex(/^[a-zA-Z0-9_\-,.\\/ ]+$/),
        summary: Joi.string()
          .trim()
          .max(400)
          .regex(/^[a-zA-Z0-9_\-,.\\/ ]+$/)
      }
    })
    .unknown()
});
