import express from 'express';

const app = express();

app.use(express.json());

app.post('/', async (req, res) => {
    //TODO: Publish SNS message here.
});

const port = 3000;

app.listen(port, () => {
    console.log(`SNS publisher server is running on port ${port}`);
});