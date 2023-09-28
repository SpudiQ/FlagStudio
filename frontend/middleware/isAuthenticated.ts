export default defineNuxtRouteMiddleware((to) => {
  const accessToken = useCookie('accessToken')

  if (!accessToken.value && to.fullPath !== '/login') {
    return navigateTo('/login');
  }
});