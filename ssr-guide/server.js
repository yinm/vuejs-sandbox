const Vue = require('vue')
const server = require('express')()
const createRenderer = require('vue-server-renderer').createRenderer

server.get('*', (req, res) => {
  const app = new Vue({
    data: {
      url: req.url,
    },
    template: `<div>The visited URL is: {{ url }}</div>`,
  })

  const renderer = createRenderer({
    template: require('fs').readFileSync('./index.template.html', 'utf-8')
  })

  renderer.renderToString(app, (err, html) => {
    if (err) {
      res.status(500).end('Internal Server Error')
      return
    }
    console.log(html)
  })
})

const port = 8080

server.listen(port)
console.log(`server is listening on ${port} port`)
