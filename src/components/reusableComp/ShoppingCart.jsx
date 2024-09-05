import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
const ShoppingCart = ({id, img, name, quantity, price, addToCart, incrementQuantity, decrementQuantity, deleteCart}) => {

  const totalPrice = (quantity * price).toFixed(2);

  return (
    <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}> 
      <Box sx={{display: "flex", justifyContent: "flex-start", alignItems: "center"}}> 
        <Box component={"img"} src={img} sx={{marginRight: "16px", width: '80px', height: "80px", objectFit: "cover", borderRadius: "4px"}}/>
        <Box> 
         <Typography sx={{fontSize: "12px", lineHeight: "14px", color: "#2B354F", marginBottom: "5px", paddingRight: "20px"}}>{name}</Typography>
         
         <Box sx={{width: "80px", height: "18px", backgroundColor: "#F2EBE0", borderRadius: "25px", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 12px", border: "1px solid #164F49"}}>
            <button onClick={() => decrementQuantity(id)} style={{border: "none", outline: "none", backgroundColor: "transparent", cursor: "pointer"}}>-</button>
            <Typography>{quantity}</Typography>
            <button onClick={() => incrementQuantity(id)} style={{border: "none", outline: "none", backgroundColor: "transparent" ,cursor: "pointer"}}>+</button>
         </Box>
        </Box>

      </Box>
      <Box sx={{display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "flex-end"}}>
        <Typography sx={{display: "flex", justifyContent: "flex-start", alignItems: "center",fontSize: "14px", lineHeight: "20px", color: "#2B354F", marginBottom: "5px"}}>
          <Typography sx={{fontSize: "12px", marginTop: "3px"}}>৳ </Typography>
          {` ${totalPrice}`}
        </Typography>
        <img onClick={() => deleteCart(id)} style={{width: "14px", height: "auto", cursor: "pointer"}} src="/cart/delete.png" alt="Delete Logo" />
      </Box>
    </Box>
  )
}

export default ShoppingCart;


























