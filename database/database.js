import mongoose from "mongoose";
import {print, OutputType} from '../helpers/print.js'
import Exception from "../exceptions/Exception.js";

mongoose.set('strictQuery', true);
async function connect () {
    try {
        let connection = await mongoose.connect('mongodb://localhost:27017/ticketSearching')
        print('connect mongodb sucessfully', OutputType.SUCCESS)
        return connection
    } catch (error) {
        throw new Exception('Cant not connect mongodb')
    }
}

export default connect