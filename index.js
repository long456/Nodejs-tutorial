import express from 'express';
import * as dotenv from 'dotenv';
import userRouter from './routers/user.js'
import ticketRouter from './routers/ticket.js'
dotenv.config();
import connect from './database/database.js';

const port = process.env.port || 3000;
const app = express();
app.use(express.json());
//Router
app.use('/user', userRouter); 
app.use('/ticket', ticketRouter);

app.get('/', (req, res)=> {
    res.send('res from root');
})

app.listen(port, async() => {
    await connect()
    console.log(`app runing on port : ${port}`); 
});

