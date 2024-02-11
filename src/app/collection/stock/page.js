import React from "react"
import NavbarLayout from "../../Components/Layout/navbar"
import StockBarangView from "../../Components/View/collection/Stock"

const StockPage = () => {
  return (
    <React.Fragment>
      <NavbarLayout />
      <StockBarangView />
    </React.Fragment>
  )
}

export default StockPage
