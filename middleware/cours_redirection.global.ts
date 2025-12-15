export default defineNuxtRouteMiddleware((to) => {

  console.log(to.path)

  // Redirection des routes /cours/[ID] vers le domaine externe
  if (to.path.startsWith('/cours/')) {
    const id = to.path.replace('/cours/', '')
    if (id) {
      return navigateTo(`https://campus-digital-mooc.sdrvl.ch/${id}`, {
        external: true,
        redirectCode: 301,
      })
    }
  }
})
