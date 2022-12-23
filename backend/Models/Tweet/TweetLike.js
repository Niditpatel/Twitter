const mongoose = require('mongoose');

const TweetLikeSchema = new mongoose.Schema({
    //auto increment like id
    Like_Id: { type: Number, unique: true },
    Tweet_Id: { type: mongoose.Schema.Types.ObjectId, ref: 'Tweet', unique: 'true' },
    User_Id: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User', unique: 'true' }]
})