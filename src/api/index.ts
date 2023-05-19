import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  headers: {
    Authorization: '11231231',
  },
})

export default axiosInstance