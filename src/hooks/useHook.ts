import axios from '@api/axois'

interface IAxiosError {
  response?: {
    data?: {
      message?: string
    }
  }
}

interface IResponse<T> {
  status: boolean
  message: string
  data: T | null
}

const useAPI = <T>() => {
  const get = async ({ url }: { url: string }): Promise<IResponse<T>> => {
    try {
      const response = await axios.get(url)
      return {
        status: true,
        message: response?.data?.message,
        data: response?.data?.data as T,
      }
    } catch (err: unknown) {
      const error = err as IAxiosError
      return {
        status: false,
        message: error?.response?.data?.message as string,
        data: null,
      }
    }
  }

  const post = async ({ url, data }: { url: string; data: T }): Promise<IResponse<T>> => {
    try {
      const response = await axios.post(url, data)
      return {
        status: true,
        message: response?.data?.message,
        data: response?.data?.data as T,
      }
    } catch (err: unknown) {
      const error = err as IAxiosError
      return {
        status: false,
        message: error?.response?.data?.message as string,
        data: null,
      }
    }
  }

  return { get, post }
}

export default useAPI
