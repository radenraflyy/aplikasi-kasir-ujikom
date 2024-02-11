"use client"
import axios from "axios"
import { getCookie } from "cookies-next"
const token = getCookie("token")

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
  "Cache-Control": "no-cache",
  Expires: 0,
}

axios.defaults.headers.common["Authorization"] = "Bearer " + token

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_URL_API_DEV,
  headers,
})

instance.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
)

instance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
)

export default instance
