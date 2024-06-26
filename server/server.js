const express = require('express')
const path = require('path')
const config = require('./config/config')
const cors = require('cors')
const showRoutes = require('./routes/show.routes')

const app = express()
const PORT = config.PORT || 4000
const corsOption = {
  origin: ['http://localhost:3000']
}

// Middlewares
app.use(cors(corsOption))
app.use('/api/v1', showRoutes)
app.use(express.static(path.resolve('./public')))

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
