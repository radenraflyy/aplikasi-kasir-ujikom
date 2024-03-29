"use client"
import React, { useState } from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import Menu from "@mui/material/Menu"
import Container from "@mui/material/Container"
import Tooltip from "@mui/material/Tooltip"
import MenuItem from "@mui/material/MenuItem"
import Image from "next/image"
import { deleteCookie } from "cookies-next"
import { useRouter } from "next/navigation"
import { userKsr, kasirLogo } from "../../../../../public/image"

function NavbarLayout() {
  const [anchorElUser, setAnchorElUser] = useState(null)
  const { push } = useRouter()
  const handleLogout = () => {
    deleteCookie("token")
    deleteCookie("role")
    push("/auth/login")
  }

  const settings = [
    {
      path: "/",
      name: "Account",
      action: () => {
        alert("Account")
      },
    },
    {
      path: "/auth/login",
      name: "Logout",
      action: () => {
        handleLogout()
      },
    },
  ]

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  return (
    <AppBar position="static" color="transparent">
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Image
            src={kasirLogo}
            alt="..."
            width={100}
            height={100}
            className="md:ml-64 ml-0"
          />

          <Box>
            <Typography
              component={"span"}
              mr={2}
              sx={{ fontWeight: "bold", display: { xs: "none", md: "inline" } }}
            >
              R. Rafly Pradana Kusumah
            </Typography>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Image src={userKsr} alt="..." width={50} height={50} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting, i) => (
                <MenuItem key={i} onClick={setting.action}>
                  <Typography textAlign="center">{setting.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default NavbarLayout
