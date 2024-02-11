import React from "react"
import NavbarLayout from "../Components/Layout/navbar"
import CustomerView from "../Components/View/customer"

const CustomerPage = () => {
  return (
    <React.Fragment>
      <NavbarLayout />
      <CustomerView />
    </React.Fragment>
  )
}

export default CustomerPage
