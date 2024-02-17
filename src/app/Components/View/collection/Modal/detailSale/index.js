import React from "react"
import Modal from "../../../../Modal"
import { TextField, Button, FormLabel, MenuItem } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import moment from "moment"

const index = ({
  closeModal,
  updateCL,
  setValueCL,
  valueCL,
  dataProduct,
  dataSaleAll,
  getAllDetailSale,
}) => {
  const handleClose = () => {
    closeModal(false)
  }

  const onSubmit = async () => {
    if (valueCL.saleId !== 0 && valueCL.productId !== 0) {
      await updateCL()
      await handleClose()
      await getAllDetailSale()
    } else {
      alert("data sale, and product must be filled")
    }
  }
  return (
    <Modal onClose={() => handleClose()}>
      <div className="flex items-center justify-between border-b-2 border-black">
        <h1 className="font-bold text-lg">Detail Sale Product</h1>
        <button onClick={() => handleClose()}>
          <CloseIcon />
        </button>
      </div>
      <div className="mt-5 flex flex-col gap-y-2">
        <div>
          <FormLabel
            htmlFor="my-input"
            sx={{
              marginBottom: "5px",
              color: "#000",
            }}
          >
            Sale
          </FormLabel>
          <TextField
            select
            onChange={(e) => setValueCL({ ...valueCL, saleId: e.target.value })}
            placeholder="Customer"
            size="small"
            fullWidth
            className="mt-2"
            value={valueCL?.saleId}
          >
            <MenuItem value={0} hidden>
              Select Sale
            </MenuItem>
            {dataSaleAll?.map((item, index) => (
              <MenuItem key={index} value={item.id}>
                {item.customer.name_customer +
                  " - " +
                  moment(item.dateSale).format("MMMM/DD/YYYY") +
                  " - " +
                  item.sumPrice}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div>
          <FormLabel
            htmlFor="my-input"
            sx={{
              marginBottom: "5px",
              color: "#000",
            }}
          >
            Product
          </FormLabel>
          <TextField
            select
            onChange={(e) =>
              setValueCL({ ...valueCL, productId: e.target.value })
            }
            placeholder="Customer"
            size="small"
            fullWidth
            className="mt-2"
            value={valueCL?.productId}
          >
            <MenuItem value={0} hidden>
              Select Product
            </MenuItem>
            {dataProduct?.map((item, index) => (
              <MenuItem key={index} value={item.id}>
                {item.nameProduct}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <Button
          onClick={() => onSubmit()}
          variant="outlined"
          size="large"
          className="max-sm:w-full"
        >
          Create Detail Sale
        </Button>
      </div>
    </Modal>
  )
}

export default index
