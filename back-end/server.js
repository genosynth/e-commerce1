const express = require("express")
const port = 4000
const app = express();
const routesUrls = require('./routes/routes')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config()


mongoose.connect(process.env.DATABASE_ACCESS, (error, result) =>{
  if (error) {return console.log(error)}
  else console.log("Database connected")
})

app.use(express.json())
app.use(cors())
app.use('/api', routesUrls)


app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
  })