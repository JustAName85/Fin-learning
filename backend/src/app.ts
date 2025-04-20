import express, { Express } from 'express';
import cors, { CorsOptions } from 'cors';
import cookieParser from 'cookie-parser';
import config from './config/config';
import morgan from 'morgan';
import sendEmailRouter from './routes/sendEmail';

const { FRONT_END_URL, NODE_ENV, PORT } = config.env;
const app: Express = express();
const corsOptions: CorsOptions = {
  credentials: true,
  origin: FRONT_END_URL,
};

NODE_ENV === 'development'
  ? app.use(morgan('dev'))
  : app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors(corsOptions));

app.use('/health-check', (req, res) => {
  res.status(200).json({
    message: 'Server is running',
    status: 'success',
  });
});
app.use('/api/sendEmail', sendEmailRouter);

app.listen(PORT);
console.log('Server listening on port', PORT);
