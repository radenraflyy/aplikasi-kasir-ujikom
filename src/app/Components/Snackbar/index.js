import React from "react"
import { Snackbar, Alert } from "@mui/material"

const SnackbarInfo = ({ content, color }) => {
  return (
    <Snackbar
      open={true}
      autoHideDuration={6000}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Alert severity={color} variant="filled" sx={{ width: "100%" }}>
        {content}
      </Alert>
    </Snackbar>
  )
}

export default SnackbarInfo
