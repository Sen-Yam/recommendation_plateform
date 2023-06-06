import React from 'react'
import { Grid,Typography } from '@mui/material'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';


function Datasets({setdataset}) {
  const [checked, setChecked] = React.useState([]);

  const handleToggle = (value) => () => {
   
     const currentIndex = checked.indexOf(value);
     const newChecked = [...checked];
 
     if (currentIndex === -1) {
       newChecked.push(value);
     } else {
       newChecked.splice(currentIndex, 1);
     }
 
     setChecked(newChecked);
     setdataset(newChecked)
     
   };
   
  const customList = (items) => (

  
      <List dense component="div" role="list"sx={{display:'flex'}}>
        
      
        {items.map((value) => {
          
          return (
            <Paper sx={{ marginLeft:'2%' , width: 200, height: 50, overflow: 'auto',backgroundColor:'#F6DDB9',marginTop:'10%' }}>
            <ListItem
              key={value}
              button
              onClick={handleToggle(value)

                }
            >
              <ListItemIcon>
                <Checkbox
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
             
                />
              </ListItemIcon>
              <ListItemText primary={`${value}`} />
              
            </ListItem>
            </Paper>
          );
        })}
        
      </List>
    
  );
  return (
    <Grid  container spacing={2} justifyContent="center" alignItems="center">

      <Typography  variant="h6" sx={{fontWeight:'bold',marginTop:'3%'}}>Datasets</Typography>
      <Grid container spacing={2} justifyContent="center" alignItems="center" >
    {customList(['Amazon-Books','Books-Crossing'])}
      </Grid>
      

    </Grid>
  )
}

export default Datasets