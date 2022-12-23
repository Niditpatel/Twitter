const mongoose = require('mongoose');


const TweetSchema = new mongoose.Schema({
    //auto inc tweetid
    TweetId: { type: String, unique: true },
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
    HashTag: { type: String },
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


const Tweet = mongoose.model('Tweet', TweetSchema);