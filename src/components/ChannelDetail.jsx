import {useState, useEffect } from 'react';
import {useParams} from "react-router-dom";
import{Box} from '@mui/material';
import{Videos,ChannelCard} from './';
import{fetch_api} from '../utils/fetch_api';


const ChannelDetail = () => {
 
  const [channelDetail,setChannelDetail]=useState(null);
  const [videos,setVideos]=useState([]);
  console.log(channelDetail)

  const{id} = useParams();

  useEffect(()=>{
   fetch_api(`channels?part=snippet&id=${id}`)
    .then((data)=> setChannelDetail(data?.items[0]));

   fetch_api(`search?channelId=${id}&part=snippet&order=date`)
    .then((data)=>setVideos(data?.items));
  },[id]);


  return(
    <Box minHeight="95vh">
      <Box>
        <div style={{height:'300px',background:'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(64,64,144,1) 35%, rgba(0,212,255,1) 100%)',zIndex:10, height:'300px'}} />
        <ChannelCard channelDetail={channelDetail} marginTop="-120px" />
      </Box>
      <Box p="2" display="flex">
      <Box sx={{ mr: { sm: '110px' } }}/>
        <Videos videos={videos} />
      
      </Box>
    </Box>
  )

}

export default ChannelDetail
