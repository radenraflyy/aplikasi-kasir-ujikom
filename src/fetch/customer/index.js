"use client"
import { useEffect, useState } from "react"
import instance from "../../lib/axios"

const useFetchCustomer = () => {
  const [dataCustomer, setDataCustomer] = useState([])
  const [createCustomer, setCreateCustomer] = useState({
    name: "",
    address: "",
    phone: "",
  })
  const [infoStatusFetch, setInfoStatusFetch] = useState(0)
  const getAllCustomer = async () => {
    try {
      const response = await instance
        .get("/customer")
        .then((res) => {
          setDataCustomer(res.data.data)
        })
        .catch((err) => {
          console.log(err)
          setDataCustomer([])
        })

      return response
    } catch (error) {
      console.log(error)
      setDataCustomer([])
    }
  }

  const fetchCreateCustomer = async () => {
    try {
      await instance
        .post("/customer", {
          name: createCustomer.name,
          address: createCustomer.address,
          noTelephone: createCustomer.phone,
        })
        .then((res) => {
          if (res.data.status === 201) {
            getAllCustomer()
            setInfoStatusFetch(res.data.status)
            setCreateCustomer({
              name: "",
              address: "",
              phone: "",
            })
          }
          return
        })
    } catch (error) {
      console.error(error)
      return
    }
  }

  const fetchDeleteCustomer = async (id) => {
    try {
      await instance.delete(`/customer/${id}`).then((res) => {
        if (res.data.status === 200) {
          getAllCustomer()
          setInfoStatusFetch(res.data.status)
          console.log(res.data.data)
        }
        return
      })
    } catch (error) {
      console.error(error)
      return
    }
  }

  const fetchEditCustomer = async (id) => {
    try {
      await instance
        .put(`/customer/${id}`, {
          name: createCustomer.name,
          address: createCustomer.address,
          noTelephone: createCustomer.phone,
        })
        .then((res) => {
          if (res.data.status === 200) {
            getAllCustomer()
            setInfoStatusFetch(res.data.status)
            setCreateCustomer({
              name: "",
              address: "",
              phone: "",
            })
          }
          return
        })
    } catch (error) {
      console.error(error)
      return
    }
  }

  useEffect(() => {
    getAllCustomer()
  }, [])

  const refetch = () => {
    getAllCustomer()
  }

  return {
    dataCustomer,
    refetch,
    fetchCreateCustomer,
    setCreateCustomer,
    createCustomer,
    infoStatusFetch,
    fetchDeleteCustomer,
    fetchEditCustomer,
  }
}

export default useFetchCustomer
