"use client"
import * as React from "react"
import { styled } from "@mui/material/styles"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell, { tableCellClasses } from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import Button from "@mui/material/Button"
import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"
import useFetchCustomer from "../../../fetch/customer"

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#E8E8E8",
    color: theme.palette.common.black,
    fontWeight: "bold",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
}))

export default function TableListCustomer({ openModal, setDataEdit }) {
  const { dataCustomer, fetchDeleteCustomer } = useFetchCustomer()

  const handleEdit = (data) => {
    openModal(true)
    setDataEdit({
      id: data.id,
      name: data.name_customer,
      address: data.address,
      phone: data.noTelephone,
    })
  }

  return (
    <>
      <TableContainer component={Paper} sx={{ padding: "20px" }}>
        <p className="font-semibold mb-3">All Customer</p>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name Customer</StyledTableCell>
              <StyledTableCell>Address</StyledTableCell>
              <StyledTableCell>No. Telephone</StyledTableCell>
              <StyledTableCell>Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataCustomer.map((row, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell component="th" scope="row">
                  {row.name_customer}
                </StyledTableCell>
                <StyledTableCell>{row.address}</StyledTableCell>
                <StyledTableCell>{row.noTelephone}</StyledTableCell>
                <StyledTableCell>
                  <div className="flex flex-wrap gap-2">
                    <Button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 rounded"
                      type="button"
                      variant="outlined"
                      onClick={() => handleEdit(row)}
                    >
                      <EditIcon fontSize="small" />
                    </Button>
                    <Button
                      onClick={() => fetchDeleteCustomer(row.id)}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-3 rounded"
                      type="button"
                      variant="outlined"
                    >
                      <DeleteIcon fontSize="small" />
                    </Button>
                  </div>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
