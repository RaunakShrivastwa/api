import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT || 4000;

const app = express();

app.get('/api/user', (req, res) => {
    return res.json({name:'Shubham',Age:23,Department:'BCA'})
})

app.listen(PORT, (err) => {
    if (err) {
        return console.log("There is Error", err);
    }
});

console.log("Server is running", PORT);