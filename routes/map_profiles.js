const MapProfile = require("../db_models/MapProfile");
const router = require("express").Router();

router.get("/", async (req, res) => {
  res.sendFile(__rootdir + "/map_profiles/victoria.json");
});

module.exports = router;
