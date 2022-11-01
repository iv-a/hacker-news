import express from 'express';
import bodyParser from "body-parser";
import {errorsHandler} from "./middlewares/errors-handler";
import {router} from "./routes";
import {corsOptions} from "./utils/cors-options";
import cors from 'cors';

const { PORT = 3001 } = process.env;

const app = express();

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', router);

app.use(errorsHandler);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})
