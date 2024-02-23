import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./index.css"
const TableDatas=(props)=>
{
    const {data,who}=props
    console.log(data)
    return(
        <div>
             <TableContainer className='shadow' component={Paper}>
                <Table sx={{ maxWidth: 650 }} aria-label="caption table">

                    <TableHead>
                    <TableRow>
                        <TableCell  className='head' align="Left">{who} Details</TableCell>       
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                        <TableCell component="th" scope="row">
                            Name
                        </TableCell>
                        <TableCell  align="start">{data.name}</TableCell>
                        </TableRow>
                        <TableRow>
                        <TableCell component="th" scope="row">
                            Contact
                        </TableCell>
                        <TableCell align="start">{data.contact}</TableCell>
                        </TableRow>
                        <TableRow>
                        <TableCell component="th" scope="row">
                            Email
                        </TableCell>
                        <TableCell align="start">{data.email}</TableCell>
                        </TableRow>
                        <TableRow>
                        <TableCell component="th" scope="row">
                            Address
                        </TableCell>
                        <TableCell align="start">{data.address}</TableCell>
                        </TableRow>
    
                    </TableBody>
                </Table>
                </TableContainer>
        </div>
    )
}
export default TableDatas