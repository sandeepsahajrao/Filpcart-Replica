import React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import Search from "./Search";
import Cosloginbutton from "./Cosloginbutton";

const Header = () => {
  const logoURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
  return (
    <>
      <AppBar  sx={{background: "#2874f0",height:"55px"}}>
      <Toolbar sx={{background: "#2874f0", minHeight: '55px !important'}}>
          <Box sx={{marginLeft: "12%",textDecoration:'none',lineHeight:0}}>
            <img src={logoURL} alt='Logo' style={{ width: '75px' }} />
            <Box sx={{display:'flex'}}>
              <Typography sx={{fontSize:12,fontStyle:'italic'}}>Explore&nbsp;
                <Box component="span" sx={{color:"#FFE500"}}>Plus</Box>  
              </Typography>
              <img src={subURL} alt="pluseimg" style={{ width: '10px',height:'10px',marginLeft:'4px' }}/>
            </Box>
          </Box>
            <Search></Search>
            <Box sx={{marginLeft:"30px"}}>
              <Cosloginbutton></Cosloginbutton>
            </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
