
import Header from './components/Header';
import Home from './components/Home/Home';
import { Box } from '@mui/material';
function App() {
  return (
    <>
      <Header></Header>
      <Box sx={{ marginTop: "55px" }}>

        <Home></Home>
      </Box>
    </>
  );
}

export default App;
