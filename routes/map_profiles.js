const MapProfile = require("../db_models/MapProfile");
const router = require("express").Router();

router.get("/", async (req, res) => {
  const mapProfiles = await MapProfile.findOne(
    { type: "FeatureCollection" },
    "-_id -__v"
  );

  res.send(mapProfiles);
});

module.exports = router;
