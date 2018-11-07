const Profile = require(__rootdir + "/db_models/Profile");
const router = require("express").Router({ mergeParams: true });
const req_validator = require(__rootdir + "/req_validators/events");

router.put("/", req_validator, async (req, res) => {
  const { body } = req;
  const { id } = req.params;

  const profile = await Profile.findOneAndUpdate(
    {
      "bio.reg_no": id,
      "bio.name": body.name
    },
    {
      $push: { events: { ...body.event } }
    },
    {
      new: true,
      runValidators: true,
      fields: "-_id -__v"
    }
  );

  if (!profile) return res.sendStatus(404);

  res.send(profile);
});

module.exports = router;
