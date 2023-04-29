import React from "react";
import { Box, Button, Dialog, TextField, Typography } from "@mui/material";
const Login = ({ open, setopen }) => {
  const handelClose = () => {
    setopen(false);
  };
  return (
    <>
      <Dialog open={open} onClose={handelClose}>
        <Box sx={{height:"70vh",width:"60vw",display:"flex"}}>
          <Box sx={{background:"#2874f0",width:"49%",height:"100%"}}>
            <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png" alt="" />
          </Box>
          <Box sx={{display:'flex',flexDirection:'column',flex:1,padding:"25px 35px"}}>
            <TextField
              id='standard-basic'
              label='Enter Email/Mobile Number'
              variant='standard'
            />
            <TextField
              id='standard-basic'
              label='Enter Password'
              variant='standard'
            />
            <Typography>
              By continuing, you agree to Flipkart's Terms of Use and Privacy
              Policy.
            </Typography>
            <Button>Login</Button>
            <Typography>Or</Typography>
            <Button>Request Otp</Button>
            <Typography>New to Flipkart? Create an account</Typography>
          </Box>
        </Box>
      </Dialog>
    </>
  );
};

export default Login;
