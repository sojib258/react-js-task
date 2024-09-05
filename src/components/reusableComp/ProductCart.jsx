import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box"
import toast from 'react-hot-toast';
import { useCart } from "../../contextApi/CartContext";



const ProductCart = ({id, name, paragraph, amount, weight, imgSrc}) => {
  const {addToCart} = useCart()

  return (
    <Box> 
      
      {/* Image and Button Wrapper */}
      <Box sx={{width: "100%", height: {xs: "230px", sm: "410px"}, position: "relative", overflow: "hidden"}}>
        <Box component="img" src={imgSrc} sx={{width: "100%", height: "100%", objectFit: "cover", transition: ".6s", cursor: "pointer", "&:hover": {
        transform: "scale(1.4)",
        }}}/>

        <Box onClick={() => {
          addToCart({
            id: id,
            name: name,
            quantity: 1,
            price: amount,
            img: imgSrc,
          });
          toast.success(`${name} added to cart!`); // Toast message
        }} title="Add to Cart" component={"img"} src={"/relatedProduct/plus.png"} sx={{width: "40px", height: "40px", position: "absolute", top: "16px", right: "16px", cursor: "pointer"}}/>
      </Box>

      {/* Heading Wrapper */}
      <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center", height: "auto", width: "100%", padding: "16px 0px 8px 0px"}}> 
        <Typography component={"h2"} sx={{fontSize: "20px", lineHeight: "25.02px", color: "#2B354F"}}> 
        {name}
        </Typography>

        <Typography component={"h2"} sx={{fontSize: "20px", lineHeight: "24.14px", color: "#2B354F", fontStyle: "italic",fontWeight: "600"}}> 
        BDT {amount}
        </Typography>
      </Box>

      {/* Product Cart Text */}
      <Typography component={"p"} sx={{fontSize: "12px", lineHeight: "15.01px", color: "#2B354F", marginBottom: "8px"}}> 
        {paragraph}
        </Typography>
      <Typography sx={{fontSize: "12px", lineHeight: "14.7px", color: "#2B354F", fontStyle: "italic"}}>{weight}</Typography>
    </Box>
  )
}



export default ProductCart;





