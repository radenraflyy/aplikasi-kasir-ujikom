import React from "react"
import SideBarLayout from "../../Layout/sidebar"
import TableK from "../../Table"
import LineChart from "../../LineChart/Area"
import LineChartShowMark from "../../LineChart/ShowMark"
import { Box, Grid } from "@mui/material"

const DashboardView = () => {
  return (
    <div className="bg-gray-100">
      <SideBarLayout />

      <Box className="md:ml-64 ml-0 p-8">
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 6, md: 12 }}>
          <Grid item xs={6}>
            <TableK />
          </Grid>
          <Grid item xs={6}>
            <TableK />
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
  )
}

export default DashboardView
