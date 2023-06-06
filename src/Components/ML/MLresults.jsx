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


import {PMF_Amazon} from '../Tests/PMF/Amazon'
import {PMF_Crossing} from '../Tests/PMF/Crossing'

function MLresults(props) {
  const TFIDF_Amazon=[{ES:'/',Optimizer:'/',RMSE:'4.1906',MAE:'3.8700'}]
  const TFIDF_Cross=[{ES:'/',Optimizer:'/',RMSE:'2.0141',MAE:'0.9744'}]
  const KNN_Amazon=[{ES:'/',Optimizer:'/',RMSE:'2,3097',MAE:'2.3618'}]
  const KNN_Cross=[{ES:'/',Optimizer:'/',RMSE:'2.3090',MAE:'0.9937'}]


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
   
    case'PMF':tests=PMF_Amazon; break;
    case'TF/IDF':tests=TFIDF_Amazon; break;
    case'KNN':tests=KNN_Amazon ;break;
  }
  return tests;
}
const Model_Crossing=(element,tests)=>{
  console.log(element)
  switch(element.model){
   
    case'PMF':tests=PMF_Crossing; break;
    case'TF/IDF':tests=TFIDF_Cross; break;
    case'KNN':tests=TFIDF_Cross; break;
  }
  return tests;
}
let Data=[]
const results=(props)=> {  
  console.log(props)
  
  props.props.forEach(element => {
    console.log(element)
    let tests=[];
    if(props.data[0]=='Amazon-Books') { tests=[...Model_Amazon(element,tests)] }
    else{ tests=[...Model_Crossing(element,tests)]}
   
    let filteredItems  =[]
    if(element.model=='KNN'||element.model=='TF/IDF'){  Data.push(...tests)} 
    else { 
    filteredItems = tests.filter(
      (item) => item.ES == element.embedding && item.Optimizer ==element.optimizer
    );

    Data.push(...filteredItems);
  }
    Data.push(...filteredItems);

  });
console.log(Data)
  // filter the GMF_Amazon data based on ES and Optimizer
 
}






function CustomizedTables(rows) {
 
  return (
    
    <TableContainer  sx={{width:'60%',marginLeft:'20%' }} component={Paper}>
    <Table sx={{width:'100%', backgroundColor:'#F6DDB9'}} aria-label="customized table">
      <TableHead>
        <TableRow>
          
          <StyledTableCell align="center">Model</StyledTableCell>
          <StyledTableCell align="center">hyperparameter1</StyledTableCell>
          <StyledTableCell align="center">hyperparameter2</StyledTableCell>
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