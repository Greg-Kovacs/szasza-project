const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Nyuszi kaki!')
})

app.get('/asd', (req, res) => {
  res.send({path: "krisz2.jpg"})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})