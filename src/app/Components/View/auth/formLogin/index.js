"use client"
import React from "react"
import {
  Typography,
  TextField,
  OutlinedInput,
  FormControl,
  FormLabel,
  CardActions,
  Button,
  CircularProgress,
  InputAdornment,
  IconButton,
} from "@mui/material"
import { Visibility, VisibilityOff } from "@mui/icons-material"
import useFetchAuth from "../../../../../fetch/auth/login"
const FormControlLogin = () => {
  const { email, password, setEmail, setPassword, fetchLogin, isLoading } =
    useFetchAuth()
  const [showPassword, setShowPassword] = React.useState(false)

  const handleClickShowPassword = () => setShowPassword((show) => !show)
  return (
    <>
      <FormControl>
        <FormLabel htmlFor="my-input" sx={{ marginBottom: "5px" }}>
          <Typography component="span" color={"red"} fontSize={"xlarge"}>
            *
          </Typography>
          Email address
        </FormLabel>
        <TextField
          placeholder="Email"
          id="outlined-size-small"
          size="small"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormLabel
          htmlFor="my-input"
          sx={{ marginBottom: "5px", marginTop: "14px" }}
        >
          <Typography component="span" color={"red"} fontSize={"xlarge"}>
            *
          </Typography>
          Password
        </FormLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={showPassword ? "text" : "password"}
          size="small"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
        <CardActions
          sx={{ backgroundColor: "#033EB1", marginTop: 2 }}
          onClick={fetchLogin}
        >
          <Button size="small" sx={{ color: "white", width: "100%" }}>
            {isLoading ? (
              <CircularProgress sx={{ fontSize: "10px" }} />
            ) : (
              "Login"
            )}
          </Button>
        </CardActions>
      </FormControl>
    </>
  )
}

export default FormControlLogin
