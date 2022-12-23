const mongoose = require('mongoose');


const ListFollowerSchema = new mongoose.Schema({
    // auto increment ListFollower Id 
    ListFollower_Id: { type: Number, unique: true },
    List_Id: { type: mongoose.Schema.Types.ObjectId, ref: 'List' ,unique:true},                                                       
    Followers: [{ type: mongoose.Schema.Types.ObjectId, unique: true }]
});