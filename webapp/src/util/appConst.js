
let BACKEND_DOMAIN = '/api'
if (process.env.NODE_ENV === 'production') {
  BACKEND_DOMAIN = '/api'
} else if (process.env.NODE_ENV === 'development') {
  BACKEND_DOMAIN = 'http://10.0.130.106:3000'
}
export default {
  BACKEND_DOMAIN
}
