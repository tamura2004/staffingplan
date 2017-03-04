import axios from 'axios'

axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.put['Content-Type'] = 'application/json'

export default axios.create({
  baseUrl: 'http://localhost:3000/'
})
