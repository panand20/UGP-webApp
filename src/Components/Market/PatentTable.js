import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(equip, cap, unit, cost, totalCost) {
  return { equip, cap, unit, cost, totalCost };
}

const rows = [
  createData('Reactor 1 (Jacketed reactor, agitated, Carbon steel, atm. pressure)', 2000, 1, 35000, 35000),
  
];

export default function PatentTable() {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 650, backgroundColor:'#D9D9D9' }}>
        <TableHead>
          <TableRow>
            <TableCell width="200px">Equipment</TableCell>
            <TableCell align="center">Design Capacity (L)</TableCell>
            <TableCell align="center">No. of units</TableCell>
            <TableCell align="center">Cost/unit ($ for year 2014)</TableCell>
            <TableCell align="center">Total Cost ($ for year 2014)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.equip}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.equip}
              </TableCell>
              <TableCell align="center">{row.cap}</TableCell>
              <TableCell align="center">{row.unit}</TableCell>
              <TableCell align="center">{row.cost}</TableCell>
              <TableCell align="center">{row.totalCost}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}