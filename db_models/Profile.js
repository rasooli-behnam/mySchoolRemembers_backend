const mongoose = require("mongoose");

const schema = mongoose
  .Schema({
    available: Boolean,
    bio: {
      reg_no: {
        type: String,
        required: true,
        index: true
      },
      battalion: {
        type: String,
        required: true,
        index: true
      },
      name: {
        type: String,
        required: true,
        index: true
      },
      alias: String,
      photo: String,
      place_of_birth: String,
      date_of_birth: String,
      date_of_death: String,
      religion: String,
      occupation: String,
      marital_status: String,
      fate: String,
      street: String,
      city: String,
      state: String,
      postcode: String,
      age_at_embark: String,
      height: String,
      weight: String,
      next_of_kin: String,
      prev_military_service: String,
      enlist_date: String,
      rank: String,
      AWM_embark_roll_no: String,
      embark_details: String,
      summary: String
    },
    events: [
      {
        time_period: {
          type: String,
          enum: ["Before War", "During War", "After War"],
          required: true
        },
        name: String,
        date: String,
        coords: { lat: Number, lon: Number },
        zoom: {
          type: Number,
          default: 7
        },
        _id: false
      }
    ],
    external_resources: [
      {
        name: String,
        link: String,
        _id: false
      }
    ],
    multimedias: [
      {
        date: String,
        title: String,
        desc: String,
        src: String,
        thumbnail: String,
        link: String,
        type: {
          type: String,
          default: "image"
        },
        _id: false
      }
    ]
  })
  .index({ "bio.reg_no": 1, "bio.battalion": 1 }, { unique: true });

module.exports = mongoose.model("Profile", schema);
