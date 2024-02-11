import React from "react"
import Modal from "../../../../Modal"
import { TextField, Button, FormLabel, Typography } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"

const index = ({
  setCloseModal,
  cretaCollection,
  setValueCollection,
  valueCollection,
}) => {
  const onSubmit = async () => {
    if (
      valueCollection.name !== "" &&
      valueCollection.price !== 0 &&
      valueCollection.stock !== 0
    ) {
      await cretaCollection()
      await setCloseModal(false)
    } else {
      alert("name, price and stock must be filled")
    }
  }
  return (
    <Modal onClose={() => setCloseModal(false)}>
      <div className="flex items-center justify-between border-b-2 border-black">
        <h1 className="font-bold text-lg">Create Product</h1>
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
            Name Product
          </FormLabel>
          <TextField
            value={valueCollection.name}
            onChange={(e) =>
              setValueCollection({ ...valueCollection, name: e.target.value })
            }
            label="Product"
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
            value={valueCollection.price}
            onChange={(e) =>
              setValueCollection({ ...valueCollection, price: e.target.value })
            }
            type="number"
            label="Price"
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
            value={valueCollection.stock}
            onChange={(e) =>
              setValueCollection({ ...valueCollection, stock: e.target.value })
            }
            type="number"
            label="Stock"
            size="small"
            fullWidth
            className="mt-2"
          />
        </div>
        <Button
          onClick={() => onSubmit()}
          variant="outlined"
          size="large"
          className="max-sm:w-full"
        >
          Create
        </Button>
      </div>
    </Modal>
  )
}

export default index
