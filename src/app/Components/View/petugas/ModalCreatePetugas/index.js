import React from "react"
import Modal from "../../../Modal"
import { TextField, Button, FormLabel, MenuItem } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import useFetchPetugas from "../../../../../fetch/petugas"

const ModalCreatePetugas = ({ setCloseModal }) => {
  const { registerPetugas, valuePetugas, setValuePetugas } = useFetchPetugas()

  const onSubmit = () => {
    if (valuePetugas.name === "") {
      alert("Name is required")
    } else if (valuePetugas.email === "") {
      alert("Email is required")
    } else if (valuePetugas.role === "") {
      alert("Role is required")
    } else if (valuePetugas.password === "") {
      alert("Password is required")
    } else {
      registerPetugas()
      setValuePetugas({
        name: "",
        email: "",
        role: "",
        password: "",
      })
      setCloseModal(false)
    }
  }
  return (
    <Modal onClose={() => setCloseModal(false)}>
      <div className="flex items-center justify-between border-b-2 border-black">
        <h1 className="font-bold text-lg">Create Petugas</h1>
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
            Name
          </FormLabel>
          <TextField
            value={valuePetugas.name}
            onChange={(e) =>
              setValuePetugas({ ...valuePetugas, ["name"]: e.target.value })
            }
            label="Name"
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
            Email
          </FormLabel>
          <TextField
            value={valuePetugas.email}
            onChange={(e) =>
              setValuePetugas({ ...valuePetugas, ["email"]: e.target.value })
            }
            label="Email"
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
            Role
          </FormLabel>
          <TextField
            select
            defaultValue="0"
            size="small"
            fullWidth
            className="mt-2"
            value={valuePetugas.role}
            onChange={(e) =>
              setValuePetugas({ ...valuePetugas, ["role"]: e.target.value })
            }
          >
            <MenuItem key={0} hidden value={0}>
              Select Role
            </MenuItem>
            <MenuItem value={2}>Petugas</MenuItem>
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
            Password
          </FormLabel>
          <TextField
            value={valuePetugas.password}
            onChange={(e) =>
              setValuePetugas({ ...valuePetugas, ["password"]: e.target.value })
            }
            label="Password"
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

export default ModalCreatePetugas
