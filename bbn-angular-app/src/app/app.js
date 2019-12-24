const history = require('connect-history-api-fallback')
const express = require('express')
const app = express()
app.use(history({
  verbose: true
}))
app.use(express.static('.'))
app.listen(7500, function () {
  console.log('Example app listening on port 7500!')
})