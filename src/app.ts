import * as dotenv from 'dotenv';
import express, { Response, Request, NextFunction } from 'express';
import cors from 'cors';
import { routes } from '../src/routes';

dotenv.config();
const app = express();

const options: cors.CorsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
  methods: 'GET, PUT, POST, DELETE',
};

app.use(cors(options));
app.use(express.json());
app.use(routes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    if (err.message === 'Request failed with status code 429') {
      return res
        .status(401)
        .json({ message: 'Marketstack API limit reached, contact developer!' });
    }
    return res.status(400).json({ message: err.message });
  }

  return res.status(500).json({
    message: 'Interna server error',
  });
});

export { app };
