import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Grid } from '@mui/material';

import {GMF_Amazon} from '../Tests/GMF/Amazon'
import {NCF_Amazon} from '../Tests/NCF/Amazon'
import {AE_Amazon} from '../Tests/AE/Amazon'
import {AE_Crossing} from '../Tests/AE/Crossing'
import {GMF_Crossing} from '../Tests/GMF/Crossing'
import {NCF_Crossing} from '../Tests/NCF/Crossing'
import {TRS_Amazon} from '../Tests/Transformer/Amazon'
import {TRS_Crossing} from '../Tests/Transformer/Crossing'
function MLresults(props) {
  console.log(props)
  const w2v_Amazon=[{ES:'/',Optimizer:'/',RMSE:'3.3058',MAE:'3.1804'}]
  const w2v_Cross=[{ES:'/',Optimizer:'/',RMSE:'2.0785',MAE:'1.7564'}]
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
  
  
  
  

const Model_Amazon=(element,tests)=>{
 
 
  
  switch(element.model){
    case'GMF': tests=GMF_Amazon;  break;
    case'NCF':tests=NCF_Amazon; break;
    case'AE': tests=AE_Amazon; break;
    case'Transformer': tests=TRS_Amazon; break;
    case'Word2Vect':tests= w2v_Amazon; break;
   
  }
  console.log(tests)
  return tests;
}
const Model_Crossing=(element,tests)=>{

 
  
  switch(element.model){
    case'GMF': tests=GMF_Crossing;  break;
    case'NCF':tests=NCF_Crossing; break;
    case'AE': tests=AE_Crossing; break;
    case'Transformer': tests=TRS_Crossing; break;
    case'Word2Vect':tests= w2v_Cross; break;
   
  }
  console.log(tests)
  return tests;
}
let Data=[]
const results=(props)=> {  
 
  
  props.props.forEach(element => {
    console.log(element)
    let tests=[];
    console.log(props.data[0])
    if(props.data[0]=='Amazon-Books') { tests=[...Model_Amazon(element,tests)] }
    else{ tests=[...Model_Crossing(element,tests)]}
   
    console.log(tests)
    let filteredItems  =[]
    if(element.model=='Word2Vect'){  Data.push(...tests)} 
    else { 
    filteredItems = tests.filter(
      (item) => item.ES == element.embedding && item.Optimizer ==element.optimizer
    );

    Data.push(...filteredItems);
  }
    console.log(Data)
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
       {results(props)}
      {CustomizedTables(Data)}</div>
  )
}

export default MLresults