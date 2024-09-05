
import SingleProduct from './pages/SingleProduct'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Toaster } from 'react-hot-toast';

import { Box } from '@mui/material'
function App() {
  return (
    <Box >
      <SingleProduct/>
      <Toaster />
    </Box>
  )
}

export default App
