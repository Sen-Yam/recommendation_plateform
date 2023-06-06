import * as React from 'react';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';



export default function MLmodels({setProps}) {
  const [checked, setChecked] = React.useState([]);

  const [left, setLeft] = React.useState(['TF/IDF','KNN']);
  const [right, setRight] = React.useState(['SVD++','PMF']);



  const handleToggle = (value) => () => {
  
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  
    setProps(newChecked)
  };
  const customList = (items,side) => (

    <Paper sx={{ width: 200, height: 130, overflow: 'auto',backgroundColor:'#F6DDB9',marginTop:'10%' }}>
      
      <List dense component="div" role="list">
        {items.map((value) => {
          
          return (
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
          );
        })}
      </List>
    </Paper>
  );

  return (
    <div>
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item> <Typography
      sx={{fontWeight:'bold',marginLeft:'5%'}}
      
      >Content Based Filtering</Typography> {customList(left,'Left')}</Grid>
      <Grid item>
        <Grid container direction="column" alignItems="center">
        </Grid>
      </Grid>
      <Grid item> <Typography
      sx={{fontWeight:'bold',marginLeft:'10%'}}
      
      >Collaborative Filtering</Typography> {customList(right,'Right')}</Grid>
      
   
    </Grid>
    <Grid  container direction="column" alignItems='center' sx={{marginTop:'2%'}}>
   
    </Grid>
   
    
    </div>
    
  );
}
