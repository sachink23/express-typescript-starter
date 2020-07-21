import express from 'express';

import {router as testRouter} from './routes/test';

const app = express();

app.use(express.json());

app.use('/test', testRouter);

app.use((req, res) => {
    res.status(404).json({
        message: 'Not Found'
    });
});
export {
    app
};

