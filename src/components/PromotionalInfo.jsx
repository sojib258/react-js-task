import { Button, Link } from "@mui/material"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"



const PromotionalInfo = () => {


  const info = [
    {
      id: 1,
      content: "Free BD shopping Over BDT1500",
      btnText: "Shop Now",
      btnUrl: "/"
    },
    {
        id: 2,
        content: "3-5 Day International Shipping",
        btnText: "Learn More",
        btnUrl: "/"
      },
      {
        id: 3,
        content: "Rated 4.8 out of 5 on Trustpilot",
        btnText: "Read our reviews",
        btnUrl: "/"
      },
  ]


  return (
    <Box sx={{
        backgroundColor: "#FF6B6E",
        padding: {xs: "35px 20px", sm: "35px 80px"},
      }}> 
      <Grid container> 
        {info.map(item => (
          <Grid key={item.id} item xs={12} md={4}>
          <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", marginBottom: {xs: "32px", md: "0px"}}}> 
            <Typography sx={{fontSize: "24px", lineHeight: "30.02px", textAlign: "center", color: "#ffffff", marginBottom: {xs: "6px", md: "12px"}}}>{item.content}</Typography>
            <Link sx={{textAlign: "center", color: "#fff", fontSize: "24px", lineHeight: "30.02px", textDecoration: "none"}} href={item.btnUrl}>{item.btnText}</Link>
          </Box>
        </Grid>
        ))}
      </Grid>
    </Box>
  )
}


export default PromotionalInfo

