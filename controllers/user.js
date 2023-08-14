import {body, validationResult} from 'express-validator'
import { userRepository } from '../repositories/index.js';
import HttpStatusCode from '../exceptions/HttpStatusCode.js';

const login = async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(HttpStatusCode.BAD_REQUEST).json({error: error.array()});
    }
    
    const { email, password} = req.body;

    try {
        const user = await userRepository.login({ 
            email, 
            password
        });
        res.status(HttpStatusCode.OK).json({
            message: 'Login suscessfully',  
        });
    } catch (exception) {
        res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
            message: exception.toString(),
        });
    }
}

const register = async (req, res) => {

    const { email, password} = req.body;

    try {
        const user = await userRepository.register({
            email,
            password
        })
        res.status(HttpStatusCode.INSERT_OK).json({
            message: 'Register suscessfully',
            data: user._doc
        });
    } catch (exception) {
        res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
            message: exception.toString(),
        });
    }

}

export default {
    login,
    register
}