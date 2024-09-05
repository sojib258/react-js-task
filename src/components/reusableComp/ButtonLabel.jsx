import { Box } from "@mui/material"


const ButtonLabel = ({text, isSelected, onClick}) => {
  return (
    <Box
    onClick={onClick}
      sx={{
        padding: {xs: "4px 8px", sm: "10px 20px"},
        textAlign: "center",
        cursor: "pointer",
        transition: "border 0.3s ease",
        color: isSelected ? "#ffffff" : "#164F49",
        background: isSelected ? "#164F49" : "#ffffff",
        border: "1px solid #164F49",
        fontSize: {xs: "12px", sm: "16px"}, lineHeight: "20.02px"
      }}
      > 
      {text}
    </Box>
  )
}

export default ButtonLabel

