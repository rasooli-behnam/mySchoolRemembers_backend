const Profile = require(__rootdir + "/db_models/Profile");
const router = require("express").Router({ mergeParams: true });

router.put("/", async (req, res) => {
  const { body } = req;

  const profile = await Profile.findByIdAndUpdate(
    req.params.id,
    {
      $push: { multimedias: { ...body } }
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
