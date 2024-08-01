import express from 'express';
import { publish } from './src/publisher/sns-publisher.mjs';

const app = express();

app.use(express.json());

app.post('/', async (req, res) => {
    const { url } = req.body;
    const response = await publish(url);
    res.send(response);
});

const port = 3000;

app.listen(port, () => {
    console.log(`SNS publisher server is running on port ${port}`);
});