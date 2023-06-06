import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Grid } from '@mui/material'
import {SocAE_Yelp} from '../Tests/Yelp/SocAE'
import {AE_Yelp} from '../Tests/Yelp/AE'

function Socresults(props) {

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#F6DDB9',
      color: theme.palette.common.black,
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
  
  
  
  

const Model=(element,tests)=>{
 
  
  switch(element.model){
 
     case'AutoEncoder': tests=AE_Yelp; break;
    case'SocAE': tests=SocAE_Yelp; break;

    
  }
  console.log(tests)
  return tests;
}
let Data=[]
const results=(props)=> {  
 
  
  props.forEach(element => {
    console.log(element)
    let tests=[];
    tests=[...Model(element,tests)]
    console.log(tests)
    const filteredItems = tests.filter(
      (item) => item.ES == element.embedding && item.Optimizer ==element.optimizer
    );
    
    Data.push(...filteredItems);

  });

 
}






function CustomizedTables(rows) {
 
  return (
    
    <TableContainer  sx={{width:'60%',marginLeft:'20%' }} component={Paper}>
    <Table sx={{width:'100%', backgroundColor:'#F6DDB9'}} aria-label="customized table">
      <TableHead>
        <TableRow>
          
          <StyledTableCell align="center">Model</StyledTableCell>
          <StyledTableCell align="center">Optimizer</StyledTableCell>
          <StyledTableCell align="center">Embedding Size</StyledTableCell>
          <StyledTableCell align="center">RMSE</StyledTableCell>
          <StyledTableCell align="center">MAE</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row,index) => (
          <StyledTableRow  >
            <StyledTableCell align="center" component="th" scope="row" sx={{width:'5%'}}>
              {props.props[index].model}
            </StyledTableCell>
            <StyledTableCell align="center" sx={{width:'5%'}}>{row.ES}</StyledTableCell>
            <StyledTableCell align="center" sx={{width:'5%'}}>{row.Optimizer}</StyledTableCell>
            <StyledTableCell align="center" sx={{width:'5%'}}>{row.RMSE}</StyledTableCell>
            <StyledTableCell align="center" sx={{width:'5%'}}>{row.MAE}</StyledTableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  );
}





     
  return (
    <div>
       {results(props.props)}
      {CustomizedTables(Data)}</div>
  )
}

export default Socresults