"use client"
import React, { useState } from "react"
import Link from "next/link"
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined"
import AppRegistrationIcon from "@mui/icons-material/AppRegistration"
import ArchiveIcon from "@mui/icons-material/Archive"
import CoPresentIcon from "@mui/icons-material/CoPresent"
import MenuIcon from "@mui/icons-material/Menu"
import Image from "next/image"
import { kasirLogo } from "../../../../../public/image"

const SideBarLayout = () => {
  const [isOpen, setIsOpen] = useState(false)
  const menuSidebar = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <GridViewOutlinedIcon />,
    },
    {
      name: "Data Collection",
      path: "/collection/list",
      icon: <AppRegistrationIcon />,
    },
    {
      name: "Stock",
      path: "/collection/stock",
      icon: <ArchiveIcon />,
    },
    {
      name: "Create Employee",
      path: "/create/employee",
      icon: <CoPresentIcon />,
    },
  ]

  return (
    <div className="max-w-[270px] h-screen md:block hidden bg-gray-800 fixed top-0">
      <div className="p-8">
        <header>
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-semibold text-white">Menu</h1>
            <button onClick={() => setIsOpen(!isOpen)}>
              <MenuIcon sx={{ color: "white", fontSize: "35px" }} />
            </button>
          </div>
          <p className="text-gray-300 text-left md:hidden block">
            Welcome, Raden Rafly.P.K
          </p>
        </header>

        <sidebar>
          {menuSidebar.map((item, index) => (
            <div key={index}>
              <Link
                href={item.path}
                className="bg-white flex items-center gap-x-2 mt-7 p-3"
              >
                {item.icon}
                <h2 className="font-semibold text-[#4d71b9]">{item.name}</h2>
              </Link>
            </div>
          ))}
        </sidebar>
      </div>
    </div>
  )
}

export default SideBarLayout
