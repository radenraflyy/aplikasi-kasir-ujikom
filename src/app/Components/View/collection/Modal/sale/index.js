import React from "react"
import Modal from "../../../../Modal"
import { TextField, Button, FormLabel, MenuItem } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"

const index = ({
  closeModal,
  updateCL,
  setValueCL,
  valueCL,
  dataCustomer,
  getAllSale,
}) => {
  const handleClose = () => {
    closeModal(false)
  }

  const onSubmit = async () => {
    if (valueCL.dateSale !== "" && valueCL.customerId !== 0) {
      await updateCL()
      await handleClose()
      await getAllSale()
    } else {
      alert("date sale, customer and total must be filled")
    }
  }
  return (
    <Modal onClose={() => handleClose()}>
      <div className="flex items-center justify-between border-b-2 border-black">
        <h1 className="font-bold text-lg">Sale Product</h1>
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
            Date Sale
          </FormLabel>
          <TextField
            onChange={(e) =>
              setValueCL({ ...valueCL, dateSale: e.target.value })
            }
            datatype="date"
            placeholder="Date Sale"
            size="small"
            fullWidth
            className="mt-2"
            type="date"
          />
        </div>
        <div>
          <FormLabel
            htmlFor="my-input"
            sx={{
              marginBottom: "5px",
              color: "#000",
            }}
          >
            Customer
          </FormLabel>
          <TextField
            select
            onChange={(e) =>
              setValueCL({ ...valueCL, customerId: e.target.value })
            }
            placeholder="Customer"
            size="small"
            fullWidth
            className="mt-2"
            value={valueCL?.customerId}
          >
            <MenuItem value={0} hidden>
              Select Customer
            </MenuItem>
            {dataCustomer?.map((item, index) => (
              <MenuItem key={index} value={item.id}>
                {item.name_customer}
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
          Sale
        </Button>
      </div>
    </Modal>
  )
}

export default index
