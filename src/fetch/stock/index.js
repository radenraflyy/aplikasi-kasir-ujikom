import React, { useEffect, useState } from "react"
import instance from "../../lib/axios"

const useFetchStock = () => {
  const [dataStock, setDataStock] = useState([])
  const [valueStock, setValueStock] = useState({
    idProduct: 0,
    stock: 0,
  })

  const getAllStock = async () => {
    try {
      await instance
        .get("/stock")
        .then((res) => {
          setDataStock(res.data.data)
        })
        .catch((err) => {
          console.error(err)
        })
    } catch (error) {
      console.error(error)
      throw new Error()
    }
  }

  const addStockFetch = async () => {
    try {
      await instance
        .put("/stock", {
          idProduct: valueStock.idProduct,
          stock: Number(valueStock.stock),
        })
        .then((res) => {
          setValueStock({
            idProduct: 0,
            stock: 0,
          })
          getAllStock()
          console.log(res.data.data)
        })
    } catch (error) {
      throw new Error(error)
    }
  }

  useEffect(() => {
    getAllStock()
  }, [])

  const refetch = async () => {
    getAllStock()
  }
  return { dataStock, refetch, addStockFetch, valueStock, setValueStock }
}

export default useFetchStock
