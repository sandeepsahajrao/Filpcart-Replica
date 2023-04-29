import axios from "axios";

export const getdata = async () => {
  try {
    const response = await axios.get("http://localhost:4000/products");
    const rowData = response.data;
    return rowData;
  } catch (error) {
    console.log(error)
    return null
  }
};
