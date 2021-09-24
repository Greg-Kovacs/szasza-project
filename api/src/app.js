const express = require('express')
const app = express()
const port = 3000

const images = '../../testData/pics';
const albums = '../../testData/albums'
const fs = require('fs');

app.use('/image', express.static(images));

app.get('/', (req, res) => {
  res.send('')
})

app.get('/images',async (req,res) => {
  let fileNames = []
  fs.readdirSync(images).forEach(file => {
    fileNames.push(file)
  });
  res.send({files: fileNames})
})

app.get('/albums', async(req,res) => {
  let albumNames = []
  fs.readdirSync(albums).forEach(album => {
    albumNames.push(album)
  })
  res.send({albums: albumNames})
})

app.get('/albums/:album_name', async(req,res) => {
  let fileNames = []
  fs.readdirSync(`${albums}/${req.params.album_name}`).forEach(file => {
    fileNames.push(file)
  })
  res.send({files: fileNames})
})

app.get('/albums/:album/:fileName', async(req,res) => {
  const path = `${albums}/${req.params.album}/${req.params.fileName}`
  res.sendFile(req.params.fileName, {root: `${albums}/${req.params.album}/`})
})


app.get('/about', (req,res) =>{
  res.send('about')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})