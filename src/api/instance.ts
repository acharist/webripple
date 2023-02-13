import axios from 'axios'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

const { apiEndpoint } = publicRuntimeConfig

const api = axios.create({
  baseURL: apiEndpoint,
})

export default api
