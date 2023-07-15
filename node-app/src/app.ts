import 'dotenv/config';
import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 3000;
const appID = process.env.APPID || "0001";

app.get('/', (req: Request, res: Response) => {
  res.send(`The running is appId: ${appID}`);
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});