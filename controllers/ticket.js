import HttpStatusCode from '../exceptions/HttpStatusCode.js';
import { ticketRepository } from '../repositories/index.js';
const addTicket = async(req, res) => {
    const {
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
    } = req.body

    try {
        const ticket = await ticketRepository.addTicket({
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
        res.status(HttpStatusCode.INSERT_OK).json({
            message: 'Add ticket suscessfully',
            data: ticket._doc
        });
    } catch (exception) {
        res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
            message: exception.toString(),
        });
    }

}

const getTicket = async(req, res) => {
    const {
        from,
        to,
        depart,
        type,
    } = req.body
    try {
        const ticket = await ticketRepository.getTicket({
            from,
            to,
            depart,
            type,
        })
        res.status(HttpStatusCode.OK).json({
            message: 'Get ticket suscessfully',
            data: Object.values(ticket)
        });
    } catch (exception) {
        res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
            message: exception.toString(),
        });
    }
}

export default {
    addTicket,
    getTicket
}