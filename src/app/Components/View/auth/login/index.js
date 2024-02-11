import React from "react"
import AuthLayout from "../../../Layout/auth"
import FormControlLogin from "../formLogin"
import { Box, Card, CardContent, Typography } from "@mui/material"

const ViewLogin = () => {
  return (
    <AuthLayout>
      <Box sx={{ minWidth: 450 }}>
        <Card
          variant="outlined"
          sx={{
            padding: "20px",
            borderRadius: "10px",
            boxShadow:
              "0 2px 4px 0 rgba(0, 0, 0, 0.10), 0 3px 10px 0 rgba(0, 0, 0, 0.10)",
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: 0,
              width: "100%",
            }}
          >
            <Typography
              variant="h5"
              mb={2}
              textAlign={"center"}
              fontWeight={"bold"}
            >
              Login To Kasir
            </Typography>
            <FormControlLogin />
          </CardContent>
        </Card>
      </Box>
    </AuthLayout>
  )
}

export default ViewLogin
