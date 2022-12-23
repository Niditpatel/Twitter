const mongoose = require('mongoose');

const ReplayLikeSchema = new mongoose.Schema({
    //  auto increment on replaylike_id
    ReplayLike_Id: { type: Number, unique: true },
    User_Id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    Replay_Id: { type: mongoose.Schema.Types.ObjectId, ref: 'Replay' }
}).index({ User_Id: 1, Replay_Id: 1 }, { unique: true });