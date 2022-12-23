const mongoose = require('mongoose');
const Joi = require('joi');

const PersonalInfoSchema = new mongoose.Schema({
    // use id 
    UserId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    ProfileImage: { type: String },
    ProfileCover: { type: String },
    Gender: {
        type: Number,
        // male female other 
        enum: {
            values: [0, 1, 2],
        }
    },
    BIO: { type: String },
    Location: { type: String },
    WebsiteURL: { type: String },
    // bluetic ked account or not 
    Verified: {
        type: Number,
        default: 0,
        enum: {
            values: [0, 1]
        }
    },
    // private or public 
    Protacted: {
        type: Number,
        default: 0,
        enum: {
            values: [0, 1]
        }
    },
    // is blocked
    Suspended: {
        type: Number,
        default: 0,
        enum: {
            values: [0, 1]
        }
    }
}, { timestamps: true })