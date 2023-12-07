const express = require('express');
const todoRouter = require('./routes/todo.routes');
const app = express();

app.use(express.json());


app.use('/todo',todoRouter );

app.listen(5000, () => {
    console.log('Server is running on Port 5000.');
});