
// all the imports here
import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { productRoutes } from './app/modules/product/product.routes';
import { orderRoutes } from './app/modules/order/order.routes';

// call the express app
const app:Application = express();

// use parser
app.use(express.json());
app.use(cors());


// all the product routes
app.use('/api/products', productRoutes);
// all the order routes
app.use('/api/orders', orderRoutes);


// testing routes
app.get('/testRoutes', (req:Request, res: Response) => {
    res.send('Hello programmers, welcome to the world of programming!')
});

// testing routes
app.get('/', (req:Request, res: Response) => {
    res.send('Hello programmers, welcome to the world of programming!');
});



// not found route error handling
app.all('*', (req: Request, res: Response) => {
    res.status(400).json({
        success: false,
        message: "Route not found",
    });
});


// global error handler
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
    if(error) {
        res.status(400).json({
            success: false,
            message: error || 'something went wrong.',
            error,
        });
    }
});


// all the exports here
export default app;
