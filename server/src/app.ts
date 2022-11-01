import express from 'express';
import bodyParser from "body-parser";

const { PORT = 3001 } = process.env;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})
