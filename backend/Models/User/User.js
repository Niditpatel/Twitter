const mongoose = require('mongoose');
const Joi = require('joi');
const UserSchema = new mongoose.Schema({
    // add auto increment  on UserId
    // UserId: { type: Number, required: true },
    UserName: { type: String, required: true, unique: true, min: [1, 'Min 1 is needed'] },
    FullName: { type: String, required: true },
    DOB: { type: String, required: true },
    JoinDate: { type: String, required: true, default: new Date().toLocaleDateString() },
    // take phone number or email from use one is required
    Phone: {
        type: Number,
        unique: true,
        validate: {
            validator: (v) => {
                return v.toString().length === 10;
            },
            message: v => `${v.value} has to be 10 digits`
        }
    },
    Email: { type: String, unique: true },
    Password: String
}, { timestamps: true })

const User = mongoose.model('User', UserSchema);

function ValidateUser(User) {
    const JoiSchema = Joi.object({
        // UserId: Joi.number().required(),
        UserName: Joi.string().max(15).required(),
        FullName: Joi.string().max(50).required(),
        DOB: Joi.string().required(),
        JoinDate: Joi.string().default(new Date().toLocaleDateString()),
        Phone: Joi.string().regex(/[6-9]{1}[0-9]{9}/),
        Email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
        Password: Joi.string().min(3)
    }).or('Phone', 'Email')
    return JoiSchema.validateAsync(User);
}

module.exports = { User, ValidateUser }


