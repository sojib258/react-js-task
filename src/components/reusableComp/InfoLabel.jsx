import { Box, Typography } from "@mui/material"


const InfoLabel = ({imgSrc, text}) => {
  return (
    <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}> 
      <Box component={"img"} src={imgSrc} sx={{width: "36px", height: "36px", marginBottom: "8px"}}/>
      <Typography sx={{fontSize: "14px", lineHeight: "17.51px", color: "#424242", textAlign: "center"
      }}>{text}</Typography>
    </Box>
  )
}

export default InfoLabel

