const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req: any, res: any) => {
    res.send('First run');
});

app.listen(port, () => {
    console.log(`Server started at ${port}`);
});
