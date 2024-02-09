import React from "react"
import NavbarLayout from "../Components/Layout/navbar"
import DashboardView from "../Components/View/dashboard"

const PageDashboard = () => {
  return (
    <React.Fragment>
      <NavbarLayout />
      <DashboardView />
    </React.Fragment>
  )
}

export default PageDashboard
