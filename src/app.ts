const express = require('express');
import { routes } from './routes';
import { Router } from 'express';

// const { routes } = require('./routes');
// const { Router } = require('express');

const app = express();
const port = 8000;

app.use('/v1', routes(Router({ caseSensitive: true })));

app.listen(port, () => {
    console.log(`Server started at ${port}`);
});

