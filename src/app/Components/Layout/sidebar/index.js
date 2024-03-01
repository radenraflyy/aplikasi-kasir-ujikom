"use client"
import React, { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { getCookie } from "cookies-next"
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined"
import AppRegistrationIcon from "@mui/icons-material/AppRegistration"
import ArchiveIcon from "@mui/icons-material/Archive"
import CoPresentIcon from "@mui/icons-material/CoPresent"
import MenuIcon from "@mui/icons-material/Menu"
import CreateIcon from "@mui/icons-material/Create"
import { Show } from "../../../../constant/Show"

const SideBarLayout = () => {
  const router = usePathname()
  const role = getCookie("role")

  // State Menu
  const [isOpen, setIsOpen] = useState(false)

  const menuSidebar = [
    {
      name: "Dashboard",
      path: "/dashboard",
      role: ["admin", "petugas"],
      icon: <GridViewOutlinedIcon />,
    },
    {
      name: "Data Collection",
      path: "/collection/list",
      role: ["admin", "petugas"],
      icon: <AppRegistrationIcon />,
    },
    {
      name: "Stock",
      path: "/collection/stock",
      role: ["admin", "petugas"],
      icon: <ArchiveIcon />,
    },
    {
      name: "Create Customer",
      path: "/customer",
      role: ["admin", "petugas"],
      icon: <CoPresentIcon />,
    },
    {
      name: "Create Petugas",
      path: "/petugas",
      role: ["admin"],
      icon: <CreateIcon />,
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
            <>
              <Show>
                <Show.When isTrue={item.role.includes(role)}>
                  <div key={index}>
                    <Link
                      href={item.path}
                      className={`border-2 flex items-center gap-x-2 mt-7 p-3  hover:text-[#4d71b9] hover:bg-slate-50 transition-all ease-in-out delay-75 rounded-md ${
                        router === item.path
                          ? "text-[#4d71b9] bg-slate-50"
                          : "text-white"
                      } `}
                    >
                      {item.icon}
                      <h2 className="font-semibold">{item.name}</h2>
                    </Link>
                  </div>
                </Show.When>
              </Show>
            </>
          ))}
        </sidebar>
      </div>
    </div>
  )
}

export default SideBarLayout
