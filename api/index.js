const express = require('express')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const newsKey = process.env.NEWS_KEY

app.get('/news', function (req, res) {
  res.send(newsKey)
})

export default {
  path: '/api',
  handler: app
}
