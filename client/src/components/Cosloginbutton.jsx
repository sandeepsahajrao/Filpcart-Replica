import { Box, Button, Typography } from "@mui/material";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { blue } from "@mui/material/colors";
const Cosloginbutton = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: "35px",fontWeight: "bold" }}>
      <Button
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
          fontFamily:"unset",
          fontWeight: "bold",
          "&:hover": {
            background: "white",
            color: "#4f8df3",
            boxShadow: "none",
          },
        }}
      >
        Login
      </Button>
      <Typography sx={{ width: "135px",fontWeight: "bold" }}>Become a Seller</Typography>
      <Typography sx={{fontWeight: "bold" }}>More</Typography>
      <Box sx={{ display: "flex", alignSelf: "center",gap:'7px',fontWeight: "bold" }}>
        <ShoppingCartIcon></ShoppingCartIcon>
        <Typography sx={{fontWeight: "bold" }}>Cart</Typography>
      </Box>
    </Box>
  );
};

export default Cosloginbutton;
