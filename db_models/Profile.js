const mongoose = require("mongoose");

const schema = mongoose.Schema({
  available: Boolean,
  bio: {
    reg_no: {
      type: String,
      required: true,
      unique: true
    },
    photo: String,
    name: {
      type: String,
      required: true,
      index: true
    },
    place_of_birth: String,
    religion: String,
    occupation: String,
    street: String,
    city: {
      type: String,
      index: true
    },
    state: {
      type: String,
      index: true
    },
    postcode: {
      type: String,
      index: true
    },
    coords: { lat: Number, lon: Number },
    age_at_embark: String,
    height: String,
    weight: String,
    next_of_kin: String,
    prev_military_service: String,
    enlist_date: String,
    rank: String,
    unit: String,
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
});

module.exports = mongoose.model("Profile", schema);
