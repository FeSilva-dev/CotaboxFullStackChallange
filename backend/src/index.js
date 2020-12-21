const express = require('express')
const cors = require('cors')

require('./config/database')

const app = express()

const ownerRoute = require('./app/routes/owner')

app.use(cors())
app.use(express.json())
app.use('/', ownerRoute)
app.listen(3333)