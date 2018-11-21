const mongoose = require("mongoose");

const schema = mongoose.Schema({
  type: {
    type: String,
    default: "FeatureCollection"
  },
  features: [
    {
      type: {
        type: String,
        default: "Feature"
      },
      properties: {
        available: Boolean,
        reg_no: String,
        battalion: String,
        name: String
      },
      geometry: {
        type: {
          type: String,
          default: "Point"
        },
        coordinates: {
          type: [Number],
          validate: [
            v => v.length == 2,
            "{PATH} coords must be [lng: Number, lat: Number]"
          ]
        }
      },
      _id: false
    }
  ]
});

module.exports = mongoose.model("MapProfile", schema);
