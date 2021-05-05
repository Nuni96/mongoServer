import express from "express";
import helmet from "helmet";
import bodyParser from "body-parser";
import router from './router';

const app = express();
app.use(express.json()); //Korišteno express.json() radi novije verzije expressa u kojoj je uključen paket body-parser
app.use(helmet());
router(app);

export default app;