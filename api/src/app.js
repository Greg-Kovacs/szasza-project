const express = require('express')
const app = express()
const port = 3000

const images = '../../testData/pics';
const fs = require('fs');

app.use('/image', express.static(images));

app.get('/', (req, res) => {
  res.send('Nyuszi kaki!')
})

app.get('/images',async (req,res) => {
  let fileNames = []
  fs.readdirSync(images).forEach(file => {
    fileNames.push(file)
  });
  res.send({files: fileNames})
})

app.get('/about', (req,res) =>{
  res.send('about')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})