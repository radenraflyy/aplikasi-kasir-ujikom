"use client"
import * as React from "react"
import { LineChart } from "@mui/x-charts/LineChart"
import { Paper } from "@mui/material"

export default function LineChartArea() {
  return (
    <Paper sx={{padding: "10px"}}>
      <LineChart
        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
        series={[
          {
            data: [2, 5.5, 2, 8.5, 1.5, 5],
            area: true,
          },
        ]}
        width={570}
        height={380}
      />
    </Paper>
  )
}
