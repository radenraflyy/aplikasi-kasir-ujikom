import React from "react"
import Modal from "../../../../Modal"
import { TextField, Button, FormLabel, MenuItem } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"

const ModalCreateStock = ({
  setCloseModal,
  addStockFetch,
  valueStock,
  setValueStock,
  data,
}) => {
  const onSubmit = async () => {
    if (valueStock.idProduct !== 0 && valueStock.stock !== 0) {
      await addStockFetch(valueStock)
      await setCloseModal(false)
    } else {
      alert("id product and stock must be filled")
    }
  }

  return (
    <Modal onClose={() => setCloseModal(false)}>
      <div className="flex items-center justify-between border-b-2 border-black">
        <h1 className="font-bold text-lg">Tambah Stock</h1>
        <button onClick={() => setCloseModal(false)}>
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
            Product Name
          </FormLabel>
          <TextField
            select
            type="number"
            label="Id Product"
            size="small"
            fullWidth
            className="mt-2"
            onChange={(e) =>
              setValueStock({ ...valueStock, ["idProduct"]: e.target.value })
            }
          >
            {data?.map((item, i) => (
              <MenuItem key={i} value={item?.id}>
                {item?.nameProduct}
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
            Stock
          </FormLabel>
          <TextField
            type="number"
            label="Stock"
            size="small"
            fullWidth
            className="mt-2"
            value={valueStock.stock}
            onChange={(e) =>
              setValueStock({ ...valueStock, ["stock"]: e.target.value })
            }
          />
        </div>
        <Button
          onClick={() => onSubmit()}
          variant="outlined"
          size="large"
          className="max-sm:w-full"
        >
          Add
        </Button>
      </div>
    </Modal>
  )
}

export default ModalCreateStock
