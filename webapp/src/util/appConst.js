let BACKEND_DOMAIN = 'https://test-h5-maker.yingujr.com/api'
if (process.env.NODE_ENV === 'production') {
  BACKEND_DOMAIN = 'https://test-h5-maker.yingujr.com/api'
} else if (process.env.NODE_ENV === 'development') {
  BACKEND_DOMAIN = ' http://localhost:3000'   // http://localhost:3000
}
export default {
  BACKEND_DOMAIN
}
