import { app, router, store } from './app'

export default context => {
  router.push(context.url)
  const matchedComponents = router.getMatchedComponents()

  if (!matchedComponents.length) {
    return Promise.reject({ code: '404' })
  }
  context.initialState = store.state
  return app
}
