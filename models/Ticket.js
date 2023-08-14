import mongoose, { Schema, ObjectId } from "mongoose";

export default mongoose.model('Ticket',
    new Schema({
        id: {type: ObjectId},
        from: {
            type : String,
            required: true,
        },
        to: {
            type : String,
            required: true,
        },
        depart: {
            type: Date,
        },
        type: {
            type: String,
        },
        airlineCompany: {
            type: String,
        },
        flightCount: {
            type: Number,
        },
        price: {
            type: Number,
        },
        tax: {
            type: Number,
        },
        fee: {
            type: Number,
        },
        cost: {
            type: Number,
        }
    })
)