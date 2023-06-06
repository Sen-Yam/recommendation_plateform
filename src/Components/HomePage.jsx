import React from 'react'
import { Typography } from '@mui/joy'

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
function HomePage() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  return (  
  <div>
    <Typography sx={{fontSize:'18px',color:'black',marginBottom:'7%'}}>-A recommendation system is a filtering of data to present the user
       with a set of items most appropriate
        to his center of interest based on his preferences.

        .In order to realize a recommender system of books and articles based on collaboratif filtering and content
        based with social context we use 3 architectures: 
        <br />
        <ul>
          <li>Machine Learning Architecture</li>
          <li>Deep Learning Architecture</li>
          <li>Social Deep learning Architecture</li>
        </ul>
        </Typography>




    <Box sx={{ flexGrow: 1}}>
      <Grid container spacing={2} >
        <Grid xs={6} md={4} >
        <Item sx={{FlexDirection:'column',height:'250px',background:"#F6DDB9"}}>
          <div style={{height:'25%',textAlign:'center'}}><h2
          style={{marginTop:'4%'}}
          >ML Approch</h2></div>
          <div style={{display:'flex'}}>
            <div style={{flexDirection:'column',marginLeft:'-1%'}}>
              <h3>Content Based Filtering:</h3>
              <p>-TF/IDF</p>
              <p>-KNN</p>
            </div>
            <div style={{flexDirection:'column',marginLeft:'7%'}}>
              <h3>Collaborative Filtering:</h3>
              <p>-SVD++</p>
              <p>-PMF</p>
             
            </div>
            </div>
        </Item>
          
          
       
        </Grid>
        <Grid xs={6} md={4}>
        <Item sx={{FlexDirection:'column',height:'250px',background:"#F6DDB9"}}>
          <div style={{height:'25%',textAlign:'center'}}><h2
          style={{marginTop:'4%'}}
          >DL Approch</h2></div>
          <div style={{display:'flex'}}>
            <div style={{flexDirection:'column',marginLeft:'-1%'}}>
              <h3>Content Based Filtering:</h3>
              <p>-Transformer</p>
              <p>-Word2Vect</p>
            </div>
            <div style={{flexDirection:'column',marginLeft:'7%'}}>
              <h3>Collaborative Filtering:</h3>
              <p>-Autoencoder</p>
              <p>-GMF</p>
              <p>-NCF</p>
            </div>
            </div>
        </Item>
        </Grid>
        <Grid xs={6} md={4}>
        <Item sx={{FlexDirection:'column',height:'250px',background:"#F6DDB9"}}>
          <div style={{height:'25%',textAlign:'center'}}><h2
          style={{marginTop:'4%'}}
          >Social Approch</h2></div>
          
            
            <div style={{flexDirection:'column',marginLeft:'7%'}}>
              <h3>Collaborative Filtering:</h3>
              <p>-Autoencoder</p>
             
            </div>
            
        </Item>
        </Grid>
       
      </Grid>
    </Box>



  </div>
  
  )

}

export default HomePage