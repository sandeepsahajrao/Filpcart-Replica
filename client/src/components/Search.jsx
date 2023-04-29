import React from "react";
import { useState,useEffect } from "react";
import { Box, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { getdata } from "../servies/AllproductS";
const Search = () => {
  const [data, setdata] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const row = await getdata();
      setdata(row);
    };
    fetchData();
  }, []);
  console.log(data)
  return (
    <>
      <Box
        sx={{
          background: "white",
          width: "38%",
          borderRadius: "2px",
          marginLeft: "10px",
          display: "flex",
          
        }}
      >
        <InputBase
          sx={{ paddingLeft: "10px", width: "100%" ,fontSize:'unset',height:"36px"}}
          placeholder='Search for products, brands and more'
        ></InputBase>

        <Box
          sx={{
            color: "#4f8df3 !important",
            display: "flex",
            alignSelf: "center",
            marginRight: "10px",
          }}
        >
          <SearchIcon></SearchIcon>
        </Box>
      </Box>
    </>
  );
};

export default Search;
