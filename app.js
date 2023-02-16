const express = require("express");

const app = express()
const port = 3000;

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello from the server side...', app: 'Natours' })
})

app.post('/', (req, res) => {
    res.send('you can post to this endpoint...')
})

app.listen(port, () => {
    console.log(`app running on port ${port}...`);
})