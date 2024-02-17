"use client"
import React, { useState } from "react"
import SideBarLayout from "../../Layout/sidebar"
import { Box, Grid } from "@mui/material"
import { TextField, Button, FormLabel, Typography } from "@mui/material"
import TableListCollection from "../../Collection/TableListCollection"
import ModalCreateProduct from "./Modal/create"
import ModalEditProduct from "./Modal/edit"
import useFetchCollection from "../../../../fetch/collection"
import useFetchCustomer from "../../../../fetch/customer"

const CollectionView = () => {
  const {
    dataDetailCollection,
    valueCollection,
    dataSale,
    cretaCollection,
    setValueCollection,
    setDataDetailCollection,
    editCollection,
    getFindByIdCollection,
    SaleProduct,
    setDataSale,
  } = useFetchCollection()
  const { dataCustomer } = useFetchCustomer()
  const [closeModal, setCloseModal] = useState(false)
  const [closeModalEdit, setCloseModalEdit] = useState(false)

  return (
    <>
      <div className="bg-gray-100">
        <SideBarLayout />

        <Box className="md:ml-64 ml-0 p-8">
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "15px",
              borderRadius: "5px",
              backgroundColor: "#EDEDED",
            }}
          >
            <h1 className="font-bold uppercase md:text-xl text-md max-sm:mx-auto">
              All Data Collections
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-x-4 max-sm:gap-y-2">
              <TextField
                label="Search..."
                size="small"
                className="max-sm:w-full"
              />
              <Button
                onClick={() => setCloseModal(true)}
                variant="outlined"
                size="large"
                className="max-sm:w-full"
              >
                Create Product
              </Button>
            </div>
          </Box>
          <Grid container columns={{ xs: 6, md: 12 }}>
            <TableListCollection
              getFindByIdCollection={getFindByIdCollection}
              setCloseModalEdit={setCloseModalEdit}
            />
          </Grid>
        </Box>
      </div>
      {closeModal && (
        <ModalCreateProduct
          setCloseModal={setCloseModal}
          cretaCollection={cretaCollection}
          setValueCollection={setValueCollection}
          valueCollection={valueCollection}
        />
      )}
      {closeModalEdit && (
        <ModalEditProduct
          setCloseModalEdit={setCloseModalEdit}
          setDataDetailCollection={setDataDetailCollection}
          dataDetailCollection={dataDetailCollection}
          updateCL={editCollection}
          setValueCL={setValueCollection}
          valueCL={valueCollection}
        />
      )}
    </>
  )
}

export default CollectionView
