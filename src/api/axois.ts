import EncryptDecrypt from '@functions/encryptDecrypt'
import axios from 'axios'
const { decrypt } = EncryptDecrypt

const getToken = () => {
  const token = localStorage.getItem('aaryae_user') ?? '{}'
  console.log(token)
  const accessToken = decrypt(token)?.tokens?.accessToken ?? ''
  return accessToken as string
}

const AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  timeout: 10000,
})

AxiosInstance.interceptors.request.use(async (config: any) => {
  config.headers.Authorization = `Bearer ${getToken()}`
  return config
})

export default AxiosInstance
