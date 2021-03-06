const merge = require("lodash.merge");
const omit = require("lodash.omit");
const Profile = require(__rootdir + "/db_models/Profile");
const router = require("express").Router({ mergeParams: true });
const req_validator = require(__rootdir + "/req_validators/bio");

router.put("/", req_validator, async (req, res) => {
  const { body } = req;

  const profile = await Profile.findById(req.params.id);

  if (!profile) return res.sendStatus(404);

  profile.bio = merge(profile.bio, body);

  const savedProfile = await profile.save();

  if (!savedProfile) return res.sendStatus(500);

  res.send(omit(savedProfile.toJSON(), "_id", "__v"));
});

module.exports = router;
