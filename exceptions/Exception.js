import { print, OutputType } from "../helpers/print.js"
export default class Exception extends Error {
    static USER_EXITS = 'User already exits';
    static CANT_REGISTER = 'Cant register user';
    static WRONG_EMAIL_PASSWORD = 'Wrong email or password';
    constructor (message) {
        super(message)
        print(message, OutputType.ERROR)
    }
}