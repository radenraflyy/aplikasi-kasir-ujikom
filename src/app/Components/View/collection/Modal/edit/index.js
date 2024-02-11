import React from "react"
import Modal from "../../../../Modal"
import { TextField, Button, FormLabel, Typography } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"

const index = ({
  setCloseModalEdit,
  dataDetailCollection,
  setDataDetailCollection,
  updateCL,
  setValueCL,
  valueCL,
}) => {
  const handleClose = () => {
    setDataDetailCollection([])
    setCloseModalEdit(false)
  }

  const onSubmit = async (id) => {
    if (valueCL.name !== "" && valueCL.price !== 0) {
      await updateCL(id)
      await handleClose()
    } else {
      alert("name and price must be filled")
    }
  }
  return (
    <Modal onClose={() => handleClose()}>
      <div className="flex items-center justify-between border-b-2 border-black">
        <h1 className="font-bold text-lg">Edit Product</h1>
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
            Name Product
          </FormLabel>
          <TextField
            defaultValue={dataDetailCollection?.nameProduct}
            onChange={(e) =>
              setValueCL({ ...valueCL, name: e.target.value })
            }
            placeholder="Product"
            size="small"
            fullWidth
            className="mt-2"
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
            Price
          </FormLabel>
          <TextField
            defaultValue={dataDetailCollection?.price}
            onChange={(e) => setValueCL({ ...valueCL, price: e.target.value })}
            type="number"
            placeholder="Price"
            size="small"
            fullWidth
            className="mt-2"
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
            Stock
          </FormLabel>
          <TextField
            defaultValue={dataDetailCollection?.stock}
            onChange={(e) => setValueCL({ ...valueCL, stock: e.target.value })}
            type="number"
            placeholder="Stock"
            size="small"
            fullWidth
            className="mt-2"
          />
        </div>
        <Button
          onClick={() => onSubmit(dataDetailCollection?.id)}
          variant="outlined"
          size="large"
          className="max-sm:w-full"
        >
          Update
        </Button>
      </div>
    </Modal>
  )
}

export default index
