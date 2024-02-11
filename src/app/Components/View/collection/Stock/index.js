"use client"
import React, { useState } from "react"
import SideBarLayout from "../../../Layout/sidebar"
import { Box, Grid } from "@mui/material"
import { TextField, Button, FormLabel, Typography } from "@mui/material"
import TableStock from "../../../Collection/TableStock"
import ModalCreateStock from "./ModalCreateStock"
import useFetchStock from "../../../../../fetch/stock"
const StockBarang = () => {
  const { valueStock, setValueStock, addStockFetch, dataStock } =
    useFetchStock()
  const [closeModal, setCloseModal] = useState(false)
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
              All Data Stock Barang
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
                Tambah Stock
              </Button>
            </div>
          </Box>
          <Grid container columns={{ xs: 6, md: 12 }}>
            <TableStock />
          </Grid>
        </Box>
      </div>
      {closeModal && (
        <ModalCreateStock
          setCloseModal={setCloseModal}
          setValueStock={setValueStock}
          valueStock={valueStock}
          addStockFetch={addStockFetch}
          data={dataStock}
        />
      )}
    </>
  )
}

export default StockBarang
