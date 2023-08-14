import Exception from "../exceptions/Exception.js";
import {User} from "../models/index.js";

const login = async ({email, password}) => {
    let exitstingUser = await User.findOne({email}).exec()
    if (exitstingUser) {
        let isMatch =  password === exitstingUser.password
        if (!isMatch) {
            throw new Exception(Exception.WRONG_EMAIL_PASSWORD)
        }
    } else {
        throw new Exception(Exception.WRONG_EMAIL_PASSWORD)
    }
}

const register = async ({
    email, 
    password,
}) => {
    try {
        let exitstingUser = await User.findOne({email}).exec()

        if(!!exitstingUser) {
            throw new Exception(Exception.USER_EXITS)
        }

        const newUser = await User.create({
            email,
            password
        })
        return { 
            ...newUser,
        }
    } catch (exception) {
        throw new Exception(Exception.CANT_REGISTER)
    }
}

export default {
    login,
    register
}
