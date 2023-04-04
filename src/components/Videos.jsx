import React from 'react';
import { Stack,Box } from '@mui/system';
import {ChannelCard,VideoCard} from './';

const Videos = ({videos,direction}) => {

  if(!videos?.length) return 'loading...';
  console.log(videos)
   
  
 
  return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map((item,index)=>(
        <Box  key={index}>
           {item.id.videoId && <VideoCard video={item}/>}
           {/* {item.snippet.channelId && 
           <ChannelCard channelDetail={item}/>}  */}
        </Box>
      ))}
      
    </Stack>
  )
}

export default Videos
