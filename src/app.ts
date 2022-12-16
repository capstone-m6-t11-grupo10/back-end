import "reflect-metadata"
import "express-async-errors"
import express from "express"
import cors from "cors"

import { handleErrorMiddleware } from "./middlewares/errors.middleware"
import { appRoutes } from "./routes"

const app = express()

app.use(express.json())
app.use(cors())

appRoutes(app)

app.use(handleErrorMiddleware)

export default app

// import 'reflect-metadata';
// import express, { NextFunction, Request, Response } from 'express';
// import cors from 'cors';
// import { AppError } from './errors/appError';
// import routes from './routes/users.routes';

// const app = express();

// app.use(express.json());
// app.use(cors());
// app.use(routes);

// app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
//     if (err instanceof AppError) {
//         return response.status(err.statusCode).json({
//             status: 'error',
//             message: err.message,
//         });
//     }

//     console.error(err);

//     return response.status(500).json({
//         status: 'error',
//         message: 'Internal server error',
//     });
// });

// app.listen(3001);
