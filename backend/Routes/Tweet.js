const router = require('express').Router();
const { Tweet, ValidateTweet } = require('../Models/Tweet/Tweet')
// const { Tokenverify } = require('../Authentication/verifyauth')

// router.use(Tokenverify);

router.post('/tweet', async (req, res) => {

    console.log(req.body, "tweet");

    ValidateTweet(req.body).then(value => {
        try {
            new Tweet({ ...value }).save();
            res.status(200).send('Tweet Successfully')
        } catch (e) {
            res.status(400).json(e)
        }
    }).catch(e => {
        res.status(400).json(e.message)
    })
})

module.exports = router