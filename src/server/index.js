const cors = require('cors');
const express = require('express');

const postEmail = require('./controllers/postEmail');

const app = express();

app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({
//     extended: false
// }));

app.post('/email', postEmail);

const PORT = process.env.SERVER_PORT || 3001;

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});