const express = require('express')

const app = express()

app.get('/users', (req, res) => {
  res.json([
    {
      name: 'xiaoming',
      age: 18
    }
  ])
})

app.listen(3000, () => {
  console.log('Server running at 3000')
})