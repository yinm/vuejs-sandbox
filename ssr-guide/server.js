const createApp = require('./app')
const server = require('express')()
const renderer = require('vue-server-renderer').createRenderer()

server.get('*', (req, res) => {
  const context = { url: req.url }
  const app = createApp(context)

  renderer.renderToString(app, (err, html) => {
    if (err) {
      res.status(500).end('Internal Server Error')
      console.log(err)
      return
    }
    res.end(html)
  })
})

const port = 8080

server.listen(port)
console.log(`server is listening on ${port} port`)
