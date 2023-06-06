import React, { useState } from 'react'
import Datasets from "./DatasetYelp"
import Hyper from '../Hyper'

function Socparams(Props) {
const [dataset,setdataset]=useState([])
const [params,setparams]=useState([])
Props.sethyper(params)
 Props.setdata(dataset);
 
  return (
    <div > 
    <Datasets setdataset={(dataset)=>{setdataset(dataset)}}  />
    <Hyper Parameters={Props} dataset={dataset} setparams={(params)=>{setparams(params)}} /> 
    </div>
  )
}

export default Socparams