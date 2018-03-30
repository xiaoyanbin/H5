
let BACKEND_DOMAIN = 'http://10.0.130.106:3000'
if (process.env.NODE_ENV === 'production') {
  BACKEND_DOMAIN = 'http://10.0.130.106:3000'
} else if (process.env.NODE_ENV === 'development') {
  BACKEND_DOMAIN = 'http://10.0.130.106:3000'
}
export default {
  BACKEND_DOMAIN
}
