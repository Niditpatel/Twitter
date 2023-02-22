const router = require('express').Router();
const { User } = require('../Models/User/User');

router.get('/user', async (req, res) => {
    console.log(req.query)
    if (req.query.Email) {
        let user = await User.find({ Email: req.query.Email });
        if (user.length > 0) res.status(200).json(true);
        else res.status(200).send(false)
    } else if (req.query.Phone) {
        let user = await User.find({ Phone: req.query.Phone });
        if (user.length > 0) res.status(200).send(true);
        else res.status(200).send(false);
    } else if (req.query.UserName) {
        let user = await User.find({ UserName: req.query.UserName });
        if (user.length > 0) res.status(200).send(true);
        else res.status(200).send(false);
    }
    else {
        res.status(200).send(false);
    }
});


module.exports = router;