const express = require('express')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const nytKey = process.env.NYT_KEY

app.get('/nyt', function (req, res) {
  res.send(nytKey)
})

export default {
  path: '/api',
  handler: app
}
