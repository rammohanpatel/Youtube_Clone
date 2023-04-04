import React from 'react'
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import  SearchBar  from "./SearchBar";

import yt_logo from './yt_logo.png';

const Navbar = () => (
    <Stack direction="row" alignItems="center" p={2} sx={{position:"sticky",background:'#000',top:0, justifyContent:"space-between"}}>
     <Link to="/" style={{display:"flex",alignItems:"center"}} >
       <img src={yt_logo} alt="logo" height={45}/><h1 style={{color:"white",margin:"2px",fontFamily:"Roboto"}}>YouTube</h1> 
     </Link>
     <SearchBar/>
    </Stack >
  )


export default Navbar
