"use client"
import * as React from "react"
import { LineChart } from "@mui/x-charts/LineChart"
import { Paper } from "@mui/material"

export default function MarkLinechart() {
  return (
    <Paper sx={{padding: "10px"}}>
      <LineChart
        xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }]}
        series={[
          {
            data: [2, 3, 5.5, 8.5, 1.5, 5, 1, 4, 3, 8],
            showMark: ({ index }) => index % 2 === 0,
          },
        ]}
        width={570}
        height={380}
      />
    </Paper>
  )
}
