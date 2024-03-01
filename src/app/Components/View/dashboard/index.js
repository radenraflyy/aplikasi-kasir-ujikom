"use client"
import React from "react"
import SideBarLayout from "../../Layout/sidebar"
import TableSale from "../../Table/sale"
import TableDetailSale from "../../Table/detailSale"
import LineChart from "../../LineChart/Area"
import LineChartShowMark from "../../LineChart/ShowMark"
import { Box, Grid } from "@mui/material"
import ModalsaleProduct from "../../View/collection/Modal/sale"
import ModalDetailsaleProduct from "../../View/collection/Modal/detailSale"
import useFetchCollection from "../../../../fetch/collection"
import useFetchCustomer from "../../../../fetch/customer"

const DashboardView = () => {
  const {
    dataDetailSale,
    setDataDetailSale,
    dataCollection,
    DetailSaleProduct,
    dataSaleAll,
    SaleProduct,
    dataSale,
    setDataSale,
    getAllSale,
    getAllDetailSale,
    dataDetailSaleAll,
  } = useFetchCollection()
  const { dataCustomer } = useFetchCustomer()
  const [closeModalSale, setCloseModalSale] = React.useState(false)
  const [closeModalDSale, setCloseModalDSale] = React.useState(false)

  return (
    <>
      <div className="bg-gray-100">
        <SideBarLayout />

        <Box className="md:ml-64 ml-0 p-8">
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 6, md: 12 }}
          >
            <Grid item xs={6}>
              <TableSale
                setCloseModalSale={setCloseModalSale}
                getAllSale={getAllSale}
                dataSaleAll={dataSaleAll}
              />
            </Grid>
            <Grid item xs={6}>
              <TableDetailSale
                setCloseModalDSale={setCloseModalDSale}
                getAllSale={getAllSale}
                dataDetailSaleAll={dataDetailSaleAll}
                getAllDetailSale={getAllDetailSale}
              />
            </Grid>
            <Grid item xs={6}>
              <LineChart />
            </Grid>
            <Grid item xs={6}>
              <LineChartShowMark />
            </Grid>
          </Grid>
        </Box>
      </div>
      {closeModalSale && (
        <ModalsaleProduct
          closeModal={setCloseModalSale}
          valueCL={dataSale}
          getAllSale={getAllSale}
          setValueCL={setDataSale}
          updateCL={SaleProduct}
          dataCustomer={dataCustomer}
        />
      )}
      {closeModalDSale && (
        <ModalDetailsaleProduct
          closeModal={setCloseModalDSale}
          setValueCL={setDataDetailSale}
          updateCL={DetailSaleProduct}
          valueCL={dataDetailSale}
          getAllDetailSale={getAllDetailSale}
          dataProduct={dataCollection}
          dataSaleAll={dataSaleAll}
        />
      )}
    </>
  )
}

export default DashboardView
