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

  const context = {
    title: 'hello',
    meta: `
      <meta name="viewport" content="width=device-width,initial-scale=1">
      <meta name="description" content="Vue SSR">
    `
  }

  renderer.renderToString(app, context, (err, html) => {
    if (err) {
      res.status(500).end('Internal Server Error')
      console.log(err)
      return
    }
    console.log(html)
  })
})

const port = 8080

server.listen(port)
console.log(`server is listening on ${port} port`)
