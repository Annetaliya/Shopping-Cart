import express from 'express';
import data from './data';
import cors from 'cors';

const app = express();
app.use(cors())

app.get('/api/products', (req, res) => {
    res.send(data.products)
});

app.listen(5000, () => {
    console.log('server started at http://localhost:5000')
})