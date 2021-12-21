import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function DenseTable({ data }) {
  return (
    <TableContainer component={Paper}>
      <Table
        className="table-coin"
        sx={{ minWidth: 650 }}
        size="small"
        aria-label="a dense table"
      >
        <TableHead className="head">
          <TableRow>
            <TableCell align="left">#</TableCell>
            <TableCell align="left">Coin</TableCell>
            <TableCell align="right">Symbol</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">24h</TableCell>
            <TableCell align="right">Market capitalization</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className="table-body">
          {data.map((item, index) => (
            <TableRow
              key={item.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {index + 1}
              </TableCell>
              <TableCell component="th" scope="row">
                {item.name}
              </TableCell>
              <TableCell align="right">{item.symbol}</TableCell>
              <TableCell align="right">{item.current_price} $</TableCell>
              <TableCell align="right">
                {item.price_change_percentage_24h.toFixed(1)}%
              </TableCell>
              <TableCell align="right">{item.market_cap} $</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
