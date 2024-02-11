import React from "react"
import Modal from "../../../../Modal"
import { TextField, Button, FormLabel, Typography } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"

const ModalEditCustomer = ({
  setCloseModal,
  setCreateCustomer,
  createCustomer,
  fetchEditCustomer,
}) => {
  const handleCloseModal = () => {
    setCloseModal(false)
  }

  console.log(createCustomer)

  const onSubmit = () => {
    if (createCustomer.name === "") {
      alert("Name is required")
    } else if (createCustomer.address === "") {
      alert("Address is required")
    } else if (createCustomer.phone === "") {
      alert("Phone is required")
    } else {
      fetchEditCustomer(createCustomer.id)
      setCloseModal(false)
    }
  }

  return (
    <Modal onClose={() => handleCloseModal()}>
      <div className="flex items-center justify-between border-b-2 border-black">
        <h1 className="font-bold text-lg">Edit Customer</h1>
        <button onClick={() => handleCloseModal()}>
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
            Name
          </FormLabel>
          <TextField
            value={createCustomer.name}
            onChange={(e) =>
              setCreateCustomer({
                ...createCustomer,
                [e.target.name]: e.target.value,
              })
            }
            label="Name"
            name="name"
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
            Address
          </FormLabel>
          <TextField
            value={createCustomer.address}
            onChange={(e) =>
              setCreateCustomer({
                ...createCustomer,
                [e.target.name]: e.target.value,
              })
            }
            label="Address"
            name="address"
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
            No Telephone
          </FormLabel>
          <TextField
            value={createCustomer.phone}
            onChange={(e) =>
              setCreateCustomer({
                ...createCustomer,
                [e.target.name]: e.target.value,
              })
            }
            label="No Telephone"
            name="phone"
            size="small"
            fullWidth
            className="mt-2"
          />
        </div>
        <Button
          variant="outlined"
          onClick={() => onSubmit()}
          size="large"
          className="max-sm:w-full"
        >
          Update
        </Button>
      </div>
    </Modal>
  )
}

export default ModalEditCustomer
