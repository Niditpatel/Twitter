const mongoose = require('mongoose');

const FollowerSchema = new mongoose.Schema({
    // Auto increment Follower_Id
    Follower_Id: { type: Number, unique: true },
    // user id 
    User_Id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', unique: 'true' },
    Followers: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'User', unique: 'true' }
    ],
    Following: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'User', unique: 'true' }
    ]
}, { timestamps: true })
