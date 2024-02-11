import React, { useEffect, useState } from "react"
import instance from "../../lib/axios"

const useFetchPetugas = () => {
  const [dataPetugas, setDataPetugas] = useState([])
  const [valuePetugas, setValuePetugas] = useState({
    name: "",
    email: "",
    role: 0,
    password: "",
  })

  console.log(valuePetugas)
  const getPetugasFetch = async () => {
    try {
      await instance
        .get("/auth/registrasi")
        .then((res) => {
          console.log(res.data.data)
          setDataPetugas(res.data.data)
        })
        .catch((err) => {
          console.error(err)
          return
        })
    } catch (error) {
      console.error(error)
      throw new Error(error)
    }
  }

  const registerPetugas = async () => {
    try {
      const formData = new FormData()
      formData.append("name", valuePetugas.name)
      formData.append("email", valuePetugas.email)
      formData.append("role", valuePetugas.role)
      formData.append("password", valuePetugas.password)
      await instance
        .post("/auth/registrasi", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log(res.data.data)
          getPetugasFetch()
        })
    } catch (error) {
      console.error(error)
      throw new Error(error)
    }
  }

  const refetch = () => {
    getPetugasFetch()
  }

  useEffect(() => {
    getPetugasFetch()
  }, [])
  return {
    dataPetugas,
    registerPetugas,
    refetch,
    setValuePetugas,
    valuePetugas,
  }
}

export default useFetchPetugas
