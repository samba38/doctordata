const express = require('express')
const path = require('path')
const cors = require('cors')
const {open} = require('sqlite')
const sqlite3 = require('sqlite3')
const app = express()
app.use(
  cors({
    origin: '*',

    methods: ['GET', 'POST', 'PUT', 'DELETE'],

    credentials: true,
  }),
)
app.use(express.json())
const dbPath = path.join(__dirname, 'example.db')
let db = null

const initializeDBAndServer = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    })
    app.listen(3000, () => {
      console.log('Server Running at http://localhost:3000/')
    })
  } catch (e) {
    console.log(`DB Error: ${e.message}`)
    process.exit(1)
  }
}

initializeDBAndServer()

app.get('/doctors/', async (request, response) => {
  const {search_q = ''} = request.query
  const selectQuery = `SELECT * FROM employesData WHERE name LIKE '%${search_q}%';`
  const result = await db.all(selectQuery)
  response.send(result)
})

app.get('/doctors/:doctorId', async (request, response) => {
  const {doctorId} = request.params
  const selectQuery = `
   SELECT * FROM employesData WHERE id='${doctorId}';
  `
  const result = await db.get(selectQuery)
  response.send(result)
})
