import { Box } from "@mui/system";
import React from "react";
import { Banner } from "./Banner";
import NavBar from "./NavBar";

const Home = () => {
  return (
    <>
      <NavBar></NavBar>
      <Box sx={{padding:'10px 10px',background:'#f2f2f2'}}>
        <Banner></Banner>
      </Box>
    </>
  );
};

export default Home;
