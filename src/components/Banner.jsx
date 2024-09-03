import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";



const Banner = () => {
  return (
    <Box
     sx={{
        backgroundColor: "#fffff6",
        padding: {xs: "20px 0px", sm: "40px 0px"},
        
      }}
      >
      <Grid container> 
        <Grid item xs={12} md={6}>
          <Box sx={{width: "100%", height: "100%"}}> 
            <Box sx={{width: "100%", height: "100%", objectFit: "cover"}} component={"img"} src={"/banner/trees.png"}/>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}> 
          <Box sx={{width: "100%", height: "100%", backgroundColor: "#677557", display: "flex", justifyContent: "flex-start", alignItems: "center"}}> 
            <Typography component={"h2"} sx={{fontSize: {xs: "28px", sm: "40px"}, color: "#ffffff", fontStyle: "italic", padding: {xs: "50px 16px", md: "50px"}}}>As a certified organic,<br/> family-run <br/> pharmaceutical, our Laxfo <br/>goes directly from us to you<br/>—with love.</Typography>
          </Box>
        </Grid>
      </Grid>
      
    </Box>
  )
}



export default Banner






