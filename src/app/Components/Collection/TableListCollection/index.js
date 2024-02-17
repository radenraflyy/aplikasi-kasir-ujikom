"use client"
import * as React from "react"
import { styled } from "@mui/material/styles"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell, { tableCellClasses } from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import Tooltip from "@mui/material/Tooltip"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import Button from "@mui/material/Button"
import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"
import VisibilityIcon from "@mui/icons-material/Visibility"
import useFetchCollection from "../../../../fetch/collection"
import { formarRupiah } from "../../../../constant/formatRupiah"

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

export default function TableListCollection({
  setCloseModalEdit,
  getFindByIdCollection,
}) {
  const { dataCollection, deleteCollection } = useFetchCollection()
  const handleEdit = (id) => {
    getFindByIdCollection(id)
    setCloseModalEdit(true)
  }
  return (
    <TableContainer component={Paper} sx={{ padding: "20px" }}>
      <p className="font-semibold mb-3">All Collection Data Product</p>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">No</StyledTableCell>
            <StyledTableCell align="center">Product</StyledTableCell>
            <StyledTableCell align="center">Price</StyledTableCell>
            <StyledTableCell align="center">Stock</StyledTableCell>
            <StyledTableCell align="center">Sale / Detail Sale</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataCollection?.map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell align="center" component="th" scope="row">
                {index + 1}
              </StyledTableCell>
              <StyledTableCell align="center">
                {row.nameProduct}
              </StyledTableCell>
              <StyledTableCell align="center">
                {formarRupiah(row.price)}
              </StyledTableCell>
              <StyledTableCell align="center">{row.stock}</StyledTableCell>
              <StyledTableCell align="center">
                <div className="flex flex-wrap justify-center gap-2 items-center">
                  <Button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 rounded"
                    type="button"
                    onClick={() => handleEdit(row.id)}
                  >
                    <EditIcon fontSize="small" />
                  </Button>
                  <Button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-3 rounded"
                    size="small"
                    type="button"
                    onClick={() => deleteCollection(row.id)}
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
  )
}
