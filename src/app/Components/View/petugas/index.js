"use client"
import React, { useState } from "react"
import SideBarLayout from "../../Layout/sidebar"
import { Box, Grid } from "@mui/material"
import { TextField, Button, FormLabel, Typography } from "@mui/material"
import TableListPetugas from "../../Petugas"
import ModalCreatePetugas from "./ModalCreatePetugas"
const PetugasView = () => {
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
              All Data Petugas
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
                Create Petugas
              </Button>
            </div>
          </Box>
          <Grid container columns={{ xs: 6, md: 12 }}>
            <TableListPetugas />
          </Grid>
        </Box>
      </div>
      {closeModal && <ModalCreatePetugas setCloseModal={setCloseModal} />}
    </>
  )
}

export default PetugasView
