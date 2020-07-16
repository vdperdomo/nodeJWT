import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import authRouter from './routers/authRouter';
import { verifyAuthentication } from './utils/jwt.utils';

const app = express();
const port = 4000;

app.use(cors({
    origin: 'http://localhost:4200',
    allowedHeaders: ['Content-Type', 'Authorization', '*'],
    exposedHeaders: ['Content-Type', 'Authorization', '*'],
    methods: "GET,PUT,POST,DELETE",
    optionsSuccessStatus: 200
}))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/auth', authRouter);

//app.use('/', verifyAuthentication);

app.listen(port, () => console.log(`API listening on port ${port}!`));
