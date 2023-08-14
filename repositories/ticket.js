import Exception from "../exceptions/Exception.js";
import {Ticket} from "../models/index.js"

const getTicket = async({
    from,
    to,
    depart,
    type,
}) => {

    try {
        const ticket = await Ticket.find({
            from,
            to,
            depart,
            type,
        })
        return {...ticket}
    } catch (exception) {
        throw new Exception(exception)
    }
}

const addTicket = async({
    from,
    to,
    depart,
    type,
    airlineCompany,
    flightCount,
    price,
    tax,
    fee,
    cost
}) => {

    try {
        const newTicket = await Ticket.create({
            from,
            to,
            depart,
            type,
            airlineCompany,
            flightCount,
            price,
            tax,
            fee,
            cost
        })
        return { 
            ...newTicket,
        }
    } catch (exception) {
        throw new Exception(exception)
    }
}

export default {
    getTicket,
    addTicket
}