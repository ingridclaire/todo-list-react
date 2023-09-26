const express = require('express')
const app = express()
const PORT = process.env.PORT || 3007;
const path = require('path');
const connectDB = require('./config/connection')
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const dotenv = require('dotenv');

dotenv.config();

connectDB();

app.use(express.json());
app.use(cors())

app.use(express.static(path.join(__dirname, '../client/build')))

app.use('/api', userRoutes)

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});



app.listen(PORT, () => {
  console.log(`Todo app listening on port ${PORT}`)
})