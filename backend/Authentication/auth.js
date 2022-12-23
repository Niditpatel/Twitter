const express = require('express');
const router = express.Router();
const { User, ValidateUser } = require('../Models/User/User');
const bcrypt = require('bcrypt');

router.use(express.json());


router.post('/ragisterUser', async (req, res) => {
    ValidateUser(req.body).then(async (value) => {
        let Exists = await User.find({ $or: [{ Phone: value.Phone }, { UserName: value.UserName }, { Email: value.Email }] });
        if (Exists.length > 0) {
            res.status(403).json({
                message: 'User already exists'
            })
        } else {
            const Salt = await bcrypt.genSalt(10);
            const HashedPassword = await bcrypt.hash(value.Password, Salt);
            try {
                new User({ ...value, Password: HashedPassword }).save();
                res.status(200).json({
                    message: 'Successfully ragistered'
                })
            } catch (e) {
                res.json(e)
            }
        }
    }).catch(error => {
        res.json({
            message: error.message
        })
    })
});

module.exports = router;