import express from 'express';
import morgan from 'morgan';

import authRoutes from "./src/routes/auth.routes.js";


const app = express();

app.use(morgan("dev"));
//dorotea

app.use(authRoutes);



export default app; 
