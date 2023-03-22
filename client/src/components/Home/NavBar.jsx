import { Box, Typography } from "@mui/material";
import { margin } from "@mui/system";
import React from "react";
import { navData } from "../../constant/data";
const NavBar = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", margin:'55px 130px 0px 130px'}}>
      {navData.map((data) => (
        <Box sx={{ textAlign: "center",padding:'12px 8px' }}>
          <img src={data.url} alt='navimg' style={{ width: "64%" }} />
          <Typography sx={{ fontSize: "14px",fontFamily:'inherit',fontWeight:600 }}>{data.text}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default NavBar;
