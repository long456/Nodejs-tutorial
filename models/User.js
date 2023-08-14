import mongoose, { Schema, ObjectId } from "mongoose";
import isEmail from "validator/lib/isemail.js";

export default mongoose.model('User',
    new Schema({
        id: {type: ObjectId},
        email: {
            type : String,
            required: true,
            validate: {
                validator: () => isEmail,
                message: 'Email is not correct'
            },

        },
        password: {
            type : String,
            required: true,
            validate: {
                validator: (password) => password.length >= 6,
                message: 'Email is not correct'
            },
        }
    })
)
