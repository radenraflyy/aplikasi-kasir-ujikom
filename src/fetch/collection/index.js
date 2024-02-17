import { useEffect, useState } from "react"
import instance from "../../lib/axios"

const useFetchCollection = () => {
  const [dataCollection, setDataCollection] = useState([])
  const [dataDetailCollection, setDataDetailCollection] = useState([])
  const [dataSaleAll, setDataSaleAll] = useState([])
  const [dataDetailSaleAll, setDataDetailSaleAll] = useState([])
  const [valueCollection, setValueCollection] = useState({
    name: "",
    stock: 0,
    price: 0,
  })
  const [dataSale, setDataSale] = useState({
    dateSale: "",
    customerId: 0,
  })

  const [dataDetailSale, setDataDetailSale] = useState({
    saleId: 0,
    productId: 0,
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

  const getAllSale = async () => {
    try {
      await instance
        .get("/kasir-penjualan/sale")
        .then((res) => {
          setDataSaleAll(res.data.data)
        })
        .catch((err) => {
          console.error(err)
        })
    } catch (error) {
      throw new Error(error)
    }
  }

  const getAllDetailSale = async () => {
    try {
      await instance
        .get("/kasir-penjualan/detail-sale")
        .then((res) => {
          setDataDetailSaleAll(res.data.data)
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
          nameProduct: valueCollection.name
            ? valueCollection.name
            : dataDetailCollection.nameProduct,
          price: parseInt(valueCollection.price)
            ? parseInt(valueCollection.price)
            : parseInt(dataDetailCollection.price),
          stock: parseInt(valueCollection.stock)
            ? parseInt(valueCollection.stock)
            : parseInt(dataDetailCollection.stock),
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

  const SaleProduct = async () => {
    try {
      await instance
        .post("/kasir-penjualan/sale", {
          dateSale: dataSale.dateSale,
          customerId: dataSale.customerId,
        })
        .then((_) => {})
        .catch((err) => {
          console.error(err)
        })
    } catch (error) {
      console.error(error)
      throw new Error(error, "Something Error")
    }
  }

  const DetailSaleProduct = async () => {
    try {
      await instance
        .post("/kasir-penjualan/detail-sale", {
          saleId: dataDetailSale.saleId,
          productId: dataDetailSale.productId,
        })
        .then((_) => {})
        .catch((err) => {
          console.error(err)
        })
    } catch (error) {
      console.error(error)
      throw new Error(error, "Something Error")
    }
  }

  useEffect(() => {
    getAllCollection()
  }, [])

  return {
    dataCollection,
    dataDetailCollection,
    valueCollection,
    dataSale,
    dataDetailSale,
    dataSaleAll,
    dataDetailSaleAll,
    cretaCollection,
    setValueCollection,
    deleteCollection,
    getFindByIdCollection,
    setDataDetailCollection,
    editCollection,
    SaleProduct,
    setDataSale,
    setDataDetailSale,
    DetailSaleProduct,
    getAllSale,
    getAllDetailSale,
  }
}

export default useFetchCollection
