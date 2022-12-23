const mongoose = require('mongoose');


const BookmarkSchema = new mongoose.Schema({
    // auto increment on bookmark id
    Bookmark__Id: { type: Number, unique: true },
    User_Id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', unique: true },
    Replay_Id: [{ type: mongoose.Schema.ObjectId, ref: 'Replay', unique: true }],
    Tweet_Id: [{ type: mongoose.Schema.ObjectId, ref: 'Tweet', unique: true }]
});


