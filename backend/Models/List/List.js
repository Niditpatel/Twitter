const mongoose = require('mongoose');

const ListSchema = new mongoose.Schema({
    // auto Increment list id 
    List_Id: { type: Number, unique: true },
    ListName: { type: String, maxlength: 25 },
    ListDescription: { type: String, maxlength: 250 },
    IsPrivate: {
        type: Number,
        enum: {
            values: [0, 1]
        }
    },
    Owner_Id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    Members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User', unique: true }]
}, { timestamps: true })