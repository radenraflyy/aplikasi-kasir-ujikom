"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import instance from "../../../lib/axios"
import { setCookie } from "cookies-next"

const useFetchAuth = () => {
  const { push } = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const fetchLogin = async () => {
    setIsLoading(true)
    try {
      const response = await instance.post("/auth/login", { email, password })
      if (response.data.status === 200) {
        setCookie("token", response.data.data.token)
        setEmail("")
        setPassword("")
        setIsLoading(false)
        push("/dashboard")
      }
      setIsLoading(false)
    } catch (error) {
      console.error(error)
      setIsLoading(false)
    }
  }

  return { setEmail, setPassword, fetchLogin, email, password, isLoading }
}

export default useFetchAuth
