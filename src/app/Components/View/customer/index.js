"use client"
import React, { useState } from "react"
import SideBarLayout from "../../Layout/sidebar"
import { Box, Grid } from "@mui/material"
import { TextField, Button, FormLabel, Typography } from "@mui/material"
import TableListCustomer from "../../Customer"
import ModalCreateCustomer from "./Modal/create"
import ModalEditCustomer from "./Modal/edit"
import useFetchCustomer from "../../../../fetch/customer"
const CustomerView = () => {
  const [closeModal, setCloseModal] = useState(false)
  const [openModalEdit, setOpenModalEdit] = useState(false)

  const {
    fetchCreateCustomer,
    fetchEditCustomer,
    createCustomer,
    setCreateCustomer,
  } = useFetchCustomer()

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
              All Data Customer
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
                Create Customer
              </Button>
            </div>
          </Box>
          <Grid container columns={{ xs: 6, md: 12 }}>
            <TableListCustomer
              openModal={setOpenModalEdit}
              setDataEdit={setCreateCustomer}
            />
          </Grid>
        </Box>
      </div>
      {closeModal && (
        <ModalCreateCustomer
          setCloseModal={setCloseModal}
          createCustomer={createCustomer}
          setCreateCustomer={setCreateCustomer}
          fetchCreateCustomer={fetchCreateCustomer}
        />
      )}
      {openModalEdit && (
        <ModalEditCustomer
          setCloseModal={setOpenModalEdit}
          fetchEditCustomer={fetchEditCustomer}
          setCreateCustomer={setCreateCustomer}
          createCustomer={createCustomer}
        />
      )}
    </>
  )
}

export default CustomerView
