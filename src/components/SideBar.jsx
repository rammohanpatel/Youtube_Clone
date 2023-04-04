import React from 'react';
import {categories} from '../utils/constants';
import {Stack} from '@mui/material'



const SideBar = ({selecteditem,setSelecteditem}) => {
    
  return (
    <Stack  direction="row" sx={{overflowY:"auto",height:{sx:'auto',md:'95%'},flexDirection:{md:'column'}}}>
      {categories.map((item)=>(
       <button className="category-btn" onClick={()=>setSelecteditem(item.name)} style={{background: item.name===selecteditem && '#FC1503',color:'white'}} key={item.name}>
       <span style={{color:item.name===selecteditem? 'white':'red',marginRight:'15px'}}>{item.icon}</span>
       <span style={{opacity:item.name===selecteditem?'1':'0.8'}}>{item.name}</span>
       </button>
      ))}
    </Stack>
  )
}

export default SideBar
