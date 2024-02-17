"use client"
import { Tooltip, Button } from "@mui/material"
import * as React from "react"
import Paper from "@mui/material/Paper"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TablePagination from "@mui/material/TablePagination"
import TableRow from "@mui/material/TableRow"
import VisibilityIcon from "@mui/icons-material/Visibility"
import moment from "moment"

export default function TableK({
  setCloseModalDSale,
  getAllSale,
  dataDetailSaleAll,
  getAllDetailSale,
}) {
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)

  React.useEffect(() => {
    getAllDetailSale()
  }, [])

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  const handleModal = async () => {
    await setCloseModalDSale(true)
    await getAllSale()
  }

  return (
    <>
      <Paper sx={{ width: "100%", padding: "10px" }}>
        <Tooltip title="Sale" placement="top">
          <Button
            className="float-right bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 rounded-md mb-2"
            size="small"
            type="button"
            onClick={() => handleModal()}
          >
            <VisibilityIcon fontSize="small" className="mr-2" />
            Create Detail Sale
          </Button>
        </Tooltip>
        <TableContainer sx={{ maxHeight: 321 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Product Name</TableCell>
                <TableCell align="center">Price Product</TableCell>
                <TableCell align="center">Date Sale</TableCell>
                <TableCell align="center">Sub Total</TableCell>
                <TableCell align="center">Sum Product</TableCell>
              </TableRow>
            </TableHead>
            {dataDetailSaleAll.map((item, index) => (
              <>
                <TableBody>
                  <TableRow key={index}>
                    <TableCell align="center">
                      {item.products[0]?.nameProduct || "No Data"}
                    </TableCell>
                    <TableCell align="center">
                      {item.products[0]?.price || "No Data"}
                    </TableCell>
                    <TableCell align="center">
                      {moment(item.sale.dateSale).format("MMMM/DD/YYYY")}
                    </TableCell>
                    <TableCell align="center">{item.subTotal}</TableCell>
                    <TableCell align="center">{item.subTotal}</TableCell>
                  </TableRow>
                </TableBody>
              </>
            ))}
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={5}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  )
}
