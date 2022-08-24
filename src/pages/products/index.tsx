import React from 'react'
import { Box, Table, TableContainer, TableHead, TableRow, TableBody, Paper } from '@mui/material'
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: 'orange',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  id: number,
  user: string,
  name: string,
  image: string,
  oldPrice: number,
  newPrice: number,
) {
  return { id, user, name, image, oldPrice, newPrice };
}

const rows = [
  createData(1, '100haryt', 'apple', './../../../public/vite.svg', 10, 7),
  createData(2, '100haryt', 'apple', './../../../public/vite.svg', 10, 7),
  createData(3, '100haryt', 'apple', './../../../public/vite.svg', 10, 7),
  createData(4, '100haryt', 'apple', './../../../public/vite.svg', 10, 7),
  createData(5, '100haryt', 'apple', './../../../public/vite.svg', 10, 7),
];

const Products = () => {
  return (
    <Box sx={{ margin: '20px 20px 20px 200px' }}>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Id</StyledTableCell>
            <StyledTableCell>User</StyledTableCell>
            <StyledTableCell align="right">Name</StyledTableCell>
            <StyledTableCell align="right">Image</StyledTableCell>
            <StyledTableCell align="right">Old Price</StyledTableCell>
            <StyledTableCell align="right">New Price</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell align="left">{row.id}</StyledTableCell>
              <StyledTableCell align="left">{row.user}</StyledTableCell>
              <StyledTableCell align="right">{row.name}</StyledTableCell>
              <StyledTableCell align="right"><img src={row.image} alt="" /></StyledTableCell>
              <StyledTableCell align="right">{row.oldPrice}</StyledTableCell>
              <StyledTableCell align="right">{row.newPrice}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
  )
}

export default Products
