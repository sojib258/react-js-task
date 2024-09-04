import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import { Box, Typography } from "@mui/material";
import ShoppingCart from "./reusableComp/ShoppingCart";

const CartDrawer = ({ open, handleClickOpen, handleClose }) => {
  const product = [
    {
      id: 1,
      name: "Tropical Fruit Trio (Rambutan)",
      quantity: 2,
      price: 100,
      img: "/product/productThumbnail1.png",
    },
    {
      id: 2,
      name: "Tropical Fruit Trio (Rambutan)",
      quantity: 2,
      price: 100,
      img: "/product/productThumbnail2.png",
    },
  ];

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Box
          sx={{
            width: {xs: "auto", md: "380px"},
            height: "100vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "16px 16px 8px 16px"
            }}
          >
            <Typography
              sx={{ fontSize: "24px", lineHeight: "30.02px", color: "#2B354F" }}
            >
              Shopping Cart
            </Typography>
            <Box
              onClick={handleClose}
              sx={{ cursor: "pointer" }}
              component={"img"}
              src={"/cart/cross.png"}
            />
          </Box>
          <Typography
            sx={{
              fontSize: "12px",
              lineHeight: "15.02px",
              color: "#2B354F",
              padding: "8px 16px"
            }}
          >
            Add items worth Tk 30 for free shopping
          </Typography>

          <Typography
            sx={{ fontSize: "15px", lineHeight: "20.02px", color: "#001E00", padding: "0px 16px" }}
          >
            Added items ({product.length} Items)
          </Typography>

          {/* Actual Product */}
          <Box>
            {product.map((item) => (
              <Box
                key={item.id}
                sx={{ padding: "16px", borderBottom: "1px solid #F3F3EF" }}
              >
                <ShoppingCart
                  img={item.img}
                  name={item.name}
                  price={item.price}
                  quantity={item.quantity}
                />
              </Box>
            ))}
          </Box>
        </Box>

        <Box sx={{width: "100%", height: "auto", backgroundColor: "#F2EBE0", marginTop: "auto", padding: "16px 0px"}}>
            <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 16px", marginBottom: "12px" }}> 
              <Typography sx={{fontSize: "16px", lineHeight: "20.02px", color: "#001E00", }}>Subtotal</Typography>

              <Typography sx={{fontSize: "16px", lineHeight: "20.02px", color: "#001E00", }}>Tk. 641</Typography>

            </Box>
            <Box sx={{padding: "0px 16px"}}>
            <Button sx={{color: "#fff", backgroundColor: "#164F49", width: "100%", height: "auto", padding: "8px 20px", transition: ".3s", textTransform: "initial", borderRadius: "25px", '&:hover': {
                backgroundColor: "#0b2825"
            }}}>Checkout</Button>
            </Box>
        </Box>
          
        </Box>
      </Dialog>
    </>
  );
};

export default CartDrawer;
