import React, { useEffect, useState } from "react"
import instance from "../../lib/axios"

const useFetchCollection = () => {
  const [dataCollection, setDataCollection] = useState([])
  const [dataDetailCollection, setDataDetailCollection] = useState([])
  const [valueCollection, setValueCollection] = useState({
    name: "",
    stock: 0,
    price: 0,
  })
  const getAllCollection = async () => {
    try {
      await instance
        .get("/product")
        .then((res) => {
          setDataCollection(res.data.data)
        })
        .catch((err) => {
          console.error(err)
        })
    } catch (error) {
      throw new Error(error)
    }
  }

  const getFindByIdCollection = async (id) => {
    try {
      await instance
        .get(`/product/${id}`)
        .then((res) => {
          setDataDetailCollection(res.data.data)
        })
        .catch((err) => {
          console.error(err)
        })
    } catch (error) {
      throw new Error(error)
    }
  }

  const cretaCollection = async () => {
    try {
      await instance
        .post("/product", {
          nameProduct: valueCollection.name,
          price: parseInt(valueCollection.price),
          stock: parseInt(valueCollection.stock),
        })
        .then((_) => {
          getAllCollection()
        })
        .catch((err) => {
          console.error(err)
          console.log(err)
        })
    } catch (error) {
      console.error(error)
      console.log(error)
      throw new Error(error)
    }
  }

  const editCollection = async (id) => {
    try {
      await instance
        .patch(`/product/${id}`, {
          nameProduct: valueCollection.name,
          price: parseInt(valueCollection.price),
          stock: parseInt(valueCollection.stock),
        })
        .then((_) => {
          getAllCollection()
        })
        .catch((err) => {
          console.error(err)
        })
    } catch (error) {
      throw new Error(error)
    }
  }

  const deleteCollection = async (id) => {
    try {
      await instance
        .delete(`/product/${id}`)
        .then((res) => {
          getAllCollection()
        })
        .catch((err) => {
          console.error(err)
        })
    } catch (error) {
      throw new Error(error)
    }
  }

  useEffect(() => {
    getAllCollection()
  }, [])

  return {
    dataCollection,
    dataDetailCollection,
    valueCollection,
    cretaCollection,
    setValueCollection,
    deleteCollection,
    getFindByIdCollection,
    setDataDetailCollection,
    editCollection,
  }
}

export default useFetchCollection
