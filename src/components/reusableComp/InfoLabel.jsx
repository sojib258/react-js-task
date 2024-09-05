import { Box, Typography } from "@mui/material"


const InfoLabel = ({imgSrc, text}) => {
  return (
    <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}> 
      <Box component={"img"} src={imgSrc} sx={{width: {xs: "20px", md: "30px"}, height: {xs: "20px", md: "30px"}, marginBottom: "8px"}}/>
      <Typography sx={{fontSize: {xs: "10px", sm: "14px"}, lineHeight: "17.51px", color: "#424242", textAlign: "center"
      }}>{text}</Typography>
    </Box>
  )
}

export default InfoLabel

