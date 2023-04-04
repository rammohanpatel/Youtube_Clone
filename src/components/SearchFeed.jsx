
import { useState,useEffect } from 'react';
import {Box,Typography} from '@mui/material'
import {useParams} from 'react-router-dom';

import {Videos} from './';
import {fetch_api} from '../utils/fetch_api';

const SearchFeed = () => {

  
  const [videos,setVideos]=useState([]);
  const {searchTerm}= useParams();

  useEffect(()=>{
      fetch_api(`search?part=snippet&q=${searchTerm}`)
       .then((data)=>setVideos(data.items))
},[searchTerm])



  return (
    <Box p={2} sx={{ height:'90vh', flex:2}}>
         <Typography variant='h4' fontWeight="bold" mb={2} sx={{color:'white'}}>
          Search Results for: <span style={{color:"#F31503"}}>{searchTerm}</span> Videos
        </Typography> 
        console.log(videos)
        <Videos videos={videos}/>
        
      </Box>
      
      
  )
}

export default SearchFeed
