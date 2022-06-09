const express = require('express')
const app = express()
const port = 5000;
const connectDB = require('./config/connection')
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const dotenv = require('dotenv');

dotenv.config();

connectDB();

app.use(express.json());
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api', userRoutes)

app.listen(port, () => {
  console.log(`Todo app listening on port ${port}`)
})