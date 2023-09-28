export function setCookie(name: string, value: string, options: Record<string, any> = {}) {
  let cookie = `${name}=${encodeURIComponent(value)};`

  if (options.maxAge) {
    cookie += `max-age=${options.maxAge};`
  }

  if (options.path) {
    cookie += `path=${options.path};`
  }

  // Другие параметры куки, такие как domain и secure, могут быть добавлены по аналогии

  return cookie
}