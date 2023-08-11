require('dotenv').config()
require('./config/database')

const app = require('./app-server')

// app.use('/api/todos', require('./routes/api/todos'))
const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
    console.log(`I am listening on ${PORT}. We In the Building.`)
})