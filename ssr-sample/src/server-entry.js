import { app, router, store } from './app'

export default context => {
  router.push(context.url)
  const matchedComponents = router.getMatchedComponents()

  if (!matchedComponents.length) {
    return Promise.reject({ code: '404' })
  }

  return Promise.all(matchedComponents.map(component => {
    if (component.preFetch) {
      return component.preFetch(store)
    }
  })).then(() => {
    context.installState = store.state
    return app
  })
}
