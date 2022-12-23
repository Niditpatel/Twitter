const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { User } = require('./Models/User/User');
mongoose.set('strictQuery', true);

const app = express();


app.use(cors());
app.use(express.json());

app.use('/', require('./Authentication/auth'));


app.get('/', (req, res) => {
    console.log(res);
    res.send('hello how are you');
})
// app.post('/user', (req, res) => {
//     console.log(req.user)
//     let user = req.body;
//     console.log(req.UserId)
//     try {
//         new User({
//             UserId: user.UserId,
//             UserName: user.UserName,
//             Password: user.Password
//         }).save();
//         res.status(200).json('created successfully');
//     } catch (err) {
//         res.status(400).json('hello')
//     }
// })
const db = mongoose.connect("mongodb://localhost/Twitter").then(() => console.log('database connected')).catch((e) => console.log(e));
app.listen(3002, () => console.log('listining to the server....'))