import React from "react"
import AuthLayout from "../../../Layout/auth"
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  FormControl,
  FormLabel,
  CardActions,
  Button,
} from "@mui/material"

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
              width: "100%"
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
            <FormControl>
              <FormLabel htmlFor="my-input" sx={{ marginBottom: "5px" }}>
                <Typography component="span" color={"red"} fontSize={"xlarge"}>
                  *
                </Typography>
                Email address
              </FormLabel>
              <TextField label="Email" id="outlined-size-small" size="small" />
              <FormLabel
                htmlFor="my-input"
                sx={{ marginBottom: "5px", marginTop: "14px" }}
              >
                <Typography component="span" color={"red"} fontSize={"xlarge"}>
                  *
                </Typography>
                Password
              </FormLabel>
              <TextField
                label="Password"
                id="outlined-size-small"
                size="small"
              />
            </FormControl>
          </CardContent>
          <CardActions sx={{ backgroundColor: "#033EB1", marginTop: 2 }}>
            <Button size="small" sx={{ color: "white", width: "100%" }}>
              Login
            </Button>
          </CardActions>
        </Card>
      </Box>
    </AuthLayout>
  )
}

export default ViewLogin
