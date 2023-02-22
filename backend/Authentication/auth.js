const express = require('express');
const router = express.Router();
const { User, ValidateUser } = require('../Models/User/User');
const bcrypt = require('bcrypt');
const Jwt = require('jsonwebtoken');
require('dotenv').config();

router.use(express.json());

router.post('/login', async (req, res) => {
    console.log(req.body);
    let user;
    if (req.body.UserName) {
        user = await User.findOne({ UserName: req.body.UserName });
    } else if (req.body.Email) {
        user = await User.findOne({ Email: req.body.Email });
    } else {
        user = await User.findOne({ Phone: req.body.Phone });
    }
    console.log(user, "user");
    if (user) {
        const id = user._id.valueOf();
        const { _id, ...withoutId } = user;
        const ValidPassword = await bcrypt.compare(req.body.Password, user.Password);
        console.log(ValidPassword);
        if (ValidPassword) {
            // if pass match the give access 
            let token = Jwt.sign(
                { id, ...withoutId }
                , process.env.serect_key,
                { algorithm: process.env.algo }
            );
            console.log(token);
            res.status(200).json({
                message: 'login successfull', Token: token
            });
        } else {
            res.status(404).json({
                message: 'invalid username or password'
            });
        }
    } else {
        res.status(404).json({
            message: "invalid username or password"
        });
    }
})

router.post('/ragisterUser', async (req, res) => {
    console.log(req.body);
    ValidateUser(req.body).then(async (value) => {
        console.log("value", value.Email)
        let Exists = await User.find({ Phone: undefined });
        if (Exists.length > 0) {
            console.log(Exists)
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
                res.json({ message: e._message })
            }
        }
    }).catch(error => {
        res.json({
            message: error.message
        })
    })
});

module.exports = router;