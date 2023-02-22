const mongoose = require('mongoose');
const Joi = require('joi');

const TweetSchema = new mongoose.Schema({
    //auto inc tweetid
    // TweetId: { type: String, unique: true },
    UserId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    TweetDevice: {
        type: Number,
        default: 0,
        enum: {
            // web ,android ,iphone 
            values: [0, 1, 2]
        }
    },
    ParentTweetId: { type: mongoose.Schema.Types.ObjectId, ref: 'Tweet', default: null },
    TweetPrivacy: {
        type: Number,
        default: 0,
        enum: {
            // all, followed, selected 
            values: [0, 1, 2]
        }
    },
    TweetText: { type: String },
    IsDeleted: {
        type: Number,
        default: 0,
        enum: {
            values: [0, 1]
        }
    },
    // add cloud path to tweetmedia
    TweetMedia: [{ type: String }]
    //add  timestamp for tweetTime 
}, { timestamps: true });


function ValidateTweet(Tweet) {
    const JoiSchema = Joi.object({
        UserId: Joi.string(),
        TweetDevice: Joi.number().valid(0, 1, 2).default(0),
        ParentTweetId: Joi.string().default(null),
        TweetPrivacy: Joi.number().valid(0, 1, 2).default(0),
        TweetText: Joi.string(),
        IsDeleted: Joi.number().valid(0, 1).default(0),
        TweetMedia: Joi.array().items(Joi.string())
    }).or('TweetText', 'TweetMedia')

    return JoiSchema.validateAsync(Tweet);
}


const Tweet = mongoose.model('Tweet', TweetSchema);


module.exports = { Tweet, ValidateTweet }