const express = require('express');
// const requestIp = require('request-ip')
const app = express();

app.set('trust proxy', true);
app.get('/', async (req, res) => { 
    const ipaddress = req.ip;
    console.log(`ip = ${ipaddress}`)
    res.send(ipaddress)
});

const port = 4000;
app.listen(port, () => {
    console.log(`Server running on port ${port}...`);
});