import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"


const TopHeader = () => {
  return (
    <Box sx={{padding: {xs: "10px 20px", sm: "10px 80px", backgroundColor: "#DCD2BB"}}}> 
      <Typography sx={{fontSize: "12px", lineHeight: "15px", color: "#2b354f", textAlign: "center"}}>Our new website is live! While we fine-tune, your patience is appreciated</Typography>
    </Box>
  )
}

export default TopHeader
