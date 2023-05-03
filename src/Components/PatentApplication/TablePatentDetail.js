import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, roll, signature) {
  return { name, roll, signature };
}

const rows = [
  createData('Swayam', 2000, 1),
  createData('Swayam', 2000, 1),
  createData('Swayam', 2000, 1),
  
];

export default function TablePatentDetail() {
  return (
    <TableContainer sx={{width:'95%',margin:'2% 2% 5% 2%', pb:12}}>
      <Table sx={{border:1 }}>
        <TableHead>
          <TableRow sx={{border:1}}>
            <TableCell sx={{border:1}} width="200px"><b>NAME</b></TableCell>
            <TableCell sx={{border:1}} align="center"><b>ROLL NUMBER</b></TableCell>
            <TableCell sx={{border:1}} align="center"><b>SIGNATURE</b></TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 1 } }}
            >
              <TableCell component="th" scope="row" sx={{border:1}}>
                {row.name}
              </TableCell>
              <TableCell sx={{border:1}} align="center">{row.roll}</TableCell>
              <TableCell sx={{border:1}} align="center">{row.signature}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}