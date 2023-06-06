import React, { useState } from 'react'
import MLmodels from './MLmodels'
import MLparams from './MLparams';
import Button from '@mui/material/Button';
import MLresults from './MLresults';
function ML() {
  const [content,setcontent]=React.useState('models');
  const [hide,sethide]=React.useState(false);
  const [Props,setProps]=useState(null);
  const [data,setdata]=useState(null);
  const [hyper,sethyper]=useState(null);
  
  return (
    <div>
    <div style={{flexDirection:'column',height:'95vh' }}>
      {content=='models' && <MLmodels setProps={(params)=>{setProps(params)}} />}
      {content=='parameters' && <MLparams  Parameters={Props} setdata={(data)=>{setdata(data)}} sethyper={
        (hyper)=>{sethyper(hyper)}
      }  />}
      {content=='results' && <MLresults props={hyper} data={data} />}
      
    </div>
    <div style={{display:'flex',marginBottom:'20%'}}>
    <Button
     sx={{ my: 0.5 , backgroundColor:'#DFAC63' ,color:'black',border:'solid 1px black',fontWeight:'bold',
     marginLeft: '5%', display: content=='models'?'none':'block'
     }}
    onClick={()=>{if(content=='results'){setcontent('parameters')}else{setcontent('models')}}}
         
          variant="outlined"
          size="small"
          aria-label="move all right"
        >
        ≪
        </Button>

    <Button
     sx={{ my: 0.5 , backgroundColor:'#DFAC63' ,color:'black',border:'solid 1px black',fontWeight:'bold',
     marginLeft: '80%', display: content=='results'?'none':'block'
     }}
    onClick={()=>{if(content=='models'){setcontent('parameters')}else{setcontent('results')}}}
         
          variant="outlined"
          size="small"
          aria-label="move all right"
        >
          ≫
        </Button>
       
    </div>
    </div>
  )
}

export default ML