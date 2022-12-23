const mongoose = require('mongoose');

const ReplaySchema = new mongoose.Schema({
    // Auto increment Replay Id
    Replay_Id: { type: Number, unique: 'true' },
    Tweet_Id: { type: mongoose.Schema.Types.object, ref: 'Tweet' },
    ParentReplay_Id: { type: mongoose.Schema.Types.ObjectId, ref: 'Replay', default: null },
    Replayer_Id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    ReplayText: { type: String, maxlength: 280 },
    ReplayMedia: [{ type: String }],
    IsDeleted: {
        type: Number,
        // deleted or not 
        enum: {
            values: [0, 1]
        }
    }
}, { timestamps: true });