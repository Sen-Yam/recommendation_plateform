import React from 'react'
import { Grid,Typography } from '@mui/material'
import Autocomplete , { createFilterOptions } from '@mui/joy/Autocomplete';
import Paper from '@mui/material/Paper';
import { matchSorter } from 'match-sorter';
import TextField from '@mui/material/TextField';

function Hyper(Parameters) {
 
 
 const [data,setdata]=React.useState([])
    const Optimizers=['adam','RMSprop','Adagard','SGD']
    const Embeddings=['8','16','32','64','128']
    const Lambda=['0.001','0.01','0.1']
    const Dropouts=['0.1','0.2','0.3']
    const Empty=['','','']
   
    const model={
        model:'',optimizer:'',embedding:''
    }
    
  
    const setmodel = (Model,value) => {
      model.model = Model;
      const existingModel = data.find((item) => item.model === Model);
      if (existingModel) {
        if(Optimizers.includes(value)) {
          existingModel.optimizer = model.optimizer;
        }
        else {existingModel.embedding = model.embedding; }
        
      } else {
        data.push({...model}); // create a copy of the model object before pushing
      }
   
  Parameters.setparams([...data])
      
    
  
    };
      
    const handleAutocompleteChange1 = (event, value) => {
     
        model.optimizer=value
        
      }
    const handleAutocompleteChange2 = (event, value) => {
        model.embedding=value
        
      }
      const list = (items) => (
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          sx={{ flexGrow: 1 }}
          justifyContent={'center'}
        alignItems={'center'}
        >
          {items.map((item, index) => (
            <Grid
              flexDirection={'column'}
              item
              xs={2}
              sm={4}
              md={4}
              key={index}
              sx={{ padding: '0.5rem', display: 'flex' }}
            >
              <Typography
                sx={{
                  fontWeight: 'bold',
                  marginLeft: '10%',
                  marginBottom: '3%',
                }}
              >
                {item}
              </Typography>
              <Paper sx={{ backgroundColor: '#F6DDB9', flexGrow: 1 }}>
                <Grid
                  spacing={2}
                  justifyContent="center"
                  alignItems="center"
                  sx={{ flexDirection: 'column' }}
                >
                  <Autocomplete
                    variant="soft"
                    placeholder={item=='PMF'?'Lambda_U':item=='SocAE'?'Dropouts':item=='AutoEncoder'?'Dropouts':item=='Word2Vect'?'':
                    item=='KNN'?'':item=='TF/IDF'?'':'Optimizers'}
                    options={item=='PMF'?Lambda:
                    item=='Word2Vect'?Empty:
                    item=='KNN'?Empty:item=='TF/IDF'?Empty:
                    item=='SocAE'?Dropouts:item=='AutoEncoder'?Dropouts:Optimizers}
                    onChange={(event, value) => {
                      handleAutocompleteChange1(event, value);
                     setmodel(item);
                    }}
                    sx={{ width: '100%' ,backgroundColor:'#F6DDB9'}}
                  />
                  <Autocomplete
                    variant="soft"
                    placeholder={item=='PMF'?'Lambda_V':item=='SocAE'?'Latent Size':item=='AutoEncoder'?'Latent Size':item=='AE'?'Latent Size':item=='Word2Vect'?'':
                    item=='KNN'?'':item=='TF/IDF'?'':'Embedding Size'}
                    options={item=='PMF'?Lambda:
                    item=='Word2Vect'?Empty:
                    item=='KNN'?Empty:item=='TF/IDF'?Empty:Embeddings}
                    sx={{ width: '100%', backgroundColor:'#F6DDB9',marginTop:'5%'}}
                    onChange={(event, value) => {
                      handleAutocompleteChange2(event, value);
                      setmodel(item);
                    }}
                  />
                </Grid>
              </Paper>
            </Grid>
          ))}
        </Grid>
      );
      
    return ( 
        <Grid container spacing={2} justifyContent="center" alignItems="center" flexDirection={'column'}>
             <Typography  variant="h6" sx={{fontWeight:'bold',marginTop:'8%',marginBottom:'3%'}}>Hyperparameters</Typography>
            {list(Parameters.Parameters.Parameters)}
        </Grid> 
     )
}

export default Hyper