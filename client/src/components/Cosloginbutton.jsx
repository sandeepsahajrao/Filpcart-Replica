import { Box, Button, Typography } from "@mui/material";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { blue } from "@mui/material/colors";
import Login from "../login/Login";
import { useState } from "react";
const Cosloginbutton = () => {
  const [open, setOpen] = useState(false)
  const handelopenloginBox=()=>{
    setOpen(true)
  }
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: "35px",fontWeight: 600 }}>
      <Button
      onClick={handelopenloginBox}
        variant='contained'
        sx={{
          background: "white",
          color: "#4f8df3",
          textTransform: "none",
          fontSize: "14px",
          padding: "5px 40px",
          marginLeft:"20px",
          borderRadius: "2px",
          boxShadow: "none",
          fontFamily:"inherit",
          fontWeight: 600,
          "&:hover": {
            background: "white",
            color: "#4f8df3",
            boxShadow: "none",
          },
        }}
      >
        Login
      </Button>
      <Login
      open={open} setopen={setOpen}
      ></Login>
      <Typography sx={{ width: "135px",fontWeight: 600,fontSize: "14px" }}>Become a Seller</Typography>
      <Typography sx={{fontWeight: 600,fontSize: "14px" }}>More</Typography>
      <Box sx={{ display: "flex", alignSelf: "center",gap:'7px',fontWeight: 600,fontSize: "14px" }}>
        <ShoppingCartIcon></ShoppingCartIcon>
        <Typography sx={{fontWeight: 600,fontSize: "14px" }}>Cart</Typography>
      </Box>
    </Box>
  );
};

export default Cosloginbutton;
