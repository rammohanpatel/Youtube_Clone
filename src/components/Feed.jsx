import React from 'react';
import { useState,useEffect } from 'react';
import {Box,Stack, Typography} from '@mui/material'

import {SideBar,Videos} from './';
import {fetch_api} from '../utils/fetch_api';

const Feed = () => {

  const [selecteditem,setSelecteditem]=useState('New');
  const [videos,setVideos]=useState([]);

  useEffect(()=>{
      fetch_api(`search?part=snippet&q=${selecteditem}`).then((data)=>setVideos(data.items))
},[selecteditem])

  return (
    <Stack sx={{flexDirection:{sx:"column", md:"row"}}}>
      <Box  sx={{ height:{sx:'auto',md:'92vh'},borderRight:'1px solid #3d3d3d',px:{sx:0,md:2}}}>
        <SideBar 
        selecteditem={selecteditem}
        setSelecteditem={setSelecteditem}
        />
        <Typography  className='copyright' variant='body2' sx={{mt:1.5,color:'#fff'}}>
          Copyright © Ram Mohan Patel
        </Typography>
      </Box>
      <Box p={2} sx={{ height:'90vh', flex:2}}>
        {/* <Typography variant='h4' fontWeight="bold" mb={2} sx={{color:'white',}}>
          {selecteditem} <span style={{color:"#F31503"}}>Videos</span>
        </Typography> */}
      </Box>
      
      <Videos videos={videos}/>
      
    </Stack>
  )
}

export default Feed
