import { Typography } from "@mui/material";
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Rating from "@mui/material/Rating";
import ButtonLabel from "./reusableComp/ButtonLabel";
import { useState, useEffect } from "react";
import RadioLabel from "./reusableComp/RadioLabel";
import SelectableItem from "./SelectableOffer";

import InfoLabel from "./reusableComp/InfoLabel";
import CustomPaging from "./Carousel";


const ProductDetails = () => {

    const [selectSize, setSelectSize] = useState(null)
    const [selectedValue, setSelectedValue] = useState('');
    const [offerId, setOfferId] = useState(1);
    const [cart, setCart] = useState([]);

    

    const options = [
      { id: 1, value: "option1", label: "Option 1" },
      { id: 2, value: "option2", label: "Option 2" },
      { id: 3, value: "option3", label: "Option 3" },
    ];

    const productInfo = [
      {
        id: 1, 
        iconSrc: "/product/one.png",
        text: "Founded by Doctors"
      },
      {
        id: 2, 
        iconSrc: "/product/two.png",
        text: "Made In Bangladesh"
      },
      {
        id: 3, 
        iconSrc: "/product/three.png",
        text: "Clinically Verified"
      },
      {
        id: 4, 
        iconSrc: "/product/four.png",
        text: "Halal Ingredients"
      },
      {
        id: 5, 
        iconSrc: "/product/five.png",
        text: "Tested by 3rd Party"
      },
    ]

  const sizes = [
    {
      id: 1,
      text: "100ml"
    },
    {
        id: 2,
        text: "200ml"
      },
      {
        id: 3,
        text: "500ml"
      },
  ]

  const offer = [
    {
      id: 1,
      bdt: 800
    },
    {
        id: 2,
        bdt: 200
      }
  ]

  const handleOfferSelect = (id) => {
    setOfferId(id);
  };

  const handleToggle = (id) => {
    setSelectSize(id);
  };

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };

// for adding to cart
const addToCart = (newProduct) => {
    if (!selectSize || !selectedValue) {
      alert("You didn't select the Size and Flavor. Please select them before adding to the cart.");
      return; // Exit the function to prevent adding an incomplete product.
    }
  
    const existingProduct = cart.find((item) => item.id === newProduct.id);
    let updatedCart;
  
    if (existingProduct) {
      updatedCart = cart.map((item) =>
        item.id === newProduct.id
          ? { ...item, quantity: item.quantity + newProduct.quantity }
          : item
      );
    } else {
      updatedCart = [...cart, newProduct];
    }
  
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };
  

  //   Load cart data from localStorage
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, [])

//   Save cart data to localStorage whenever cart state changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <Box sx={{
        backgroundColor: "#fffff6",
        padding: {xs: "10px 20px", sm: "50px 80px"},
        border: "1px solid #DCD2BB"
      }}> 
      <Grid container> 
        <Grid item xs={12} md={6}>
          {/* Product Left Part */}
          <Box sx={{width: "100%", height: "auto", paddingRight: "10px"}}>
            <CustomPaging/>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}> 
         {/* Product Description Part */}
          <Box sx={{paddingLeft: "10px", marginTop: {xs: "100px", md: "0px"}}}> 
            <Box sx={{display: "flex", justifyContent: "flex-start", alignItems: "center", marginBottom: "16px"}}> 
            <Rating
          name="simple-controlled"
          value={3}
          readOnly
          sx={{ fontSize: "16px",  "& .MuiRating-iconFilled": {
            color: "#164F49", // Customize the active color here
          }, }}

        />
            <button style={{border: "none", outline: "none", backgroundColor: "transparent", fontSize: "12px", lineHeight: "15px", color: "#2B354F", marginLeft: "15px", textDecoration: "underline", cursor: "pointeer"}}>See all reviews</button>
            </Box>

            <Typography component={"h2"} sx={{fontSize: "40px", lineHeight: "48.28px", color: "#2B354F", fontStyle: "italic", fontWeight: "600", marginBottom: "16px"}}>Liposomal Vitamin C</Typography>

            <Typography sx={{fontSize: "32px", lineHeight: "32px", color: "#2B354F", fontStyle: "italic",  marginBottom: "16px"}}>BDT 4332.23</Typography>

            <Typography sx={{fontSize: "16px", lineHeight: "20.02px", color: "#2B354F", marginBottom: "16px"}}>Liposomal Vitamin C is an advanced form of Vitamin C encapsulated within liposomes, which are tiny fat-like particles that enhance its absorption and bioavailability in the body. </Typography>

            <Typography sx={{fontSize: "16px", lineHeight: "20.02px", color: "#2B354F", marginBottom: "16px"}}>This delivery method allows for more efficient cellular uptake, ensuring that higher levels of Vitamin C reach the bloodstream and tissues.</Typography>

            <Typography sx={{fontSize: "16px", lineHeight: "20.02px", color: "#2B354F", marginBottom: "16px"}}>It provides potent antioxidant support, boosts the immune system, promotes collagen production, and enhances skin health. Liposomal Vitamin C is ideal for those seeking maximum benefits from their Vitamin C supplementation.</Typography>

            {/* Select Sizes */}
            <Box sx={{display: "flex", justifyContent: "flex-start", flexWrap: "wrap", alignItems: "center",  marginBottom: "16px"}}> 
                <Typography sx={{fontSize: "16px", lineHeight: "20.02px", color: "#2B354F", marginRight: "25px"}}>Select Size:</Typography>
                
                {sizes.map(item => (
                  <Box key={item.id} sx={{margin: "5px 5px"}}> 
                    <ButtonLabel key={item.id}
                    text={item.text}
                    isSelected={selectSize === item.id}
                    onClick={() => handleToggle(item.id)}/>
                  </Box>
                ))}
            </Box>

            {/* Select Flabour */}
            <Box sx={{display: "flex", justifyContent: "flex-start", alignItems: "center",  marginBottom: "16px"}}> 
                <Typography sx={{fontSize: "16px", lineHeight: "20.02px", color: "#2B354F", marginRight: "25px"}}>Select Flavor</Typography>
                <RadioLabel options={options}
        selectedValue={selectedValue}
        onChange={handleRadioChange}/>

            </Box>

            {/* Add to Cart Button */}

            <Box onClick={() => addToCart({
                  id: 1,
                  name: "Tropical Fruit Trio (Rambutan)",
                  quantity: 1,
                  price: 100,
                  img: "/product/productThumbnail1.png",
                })} sx={{width: "100%", height: "auto", cursor: "pointer", padding: "10px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#164F49", marginBottom: "16px", cursor: "pointer"}}> 
                <Box component={"img"} src={"/product/minus.png"}/>
                <button  style={{fontSize: "24px", lineHeight: "30.02px", color: "#ffffff", textAlign: "center", border: "none", outline: "none", background: "transparent"}}>Add to Cart</button>
                <Box component={"img"} src={"/product/minus.png"}/>
            </Box>

            <Box sx={{width: "100%", height: "auto", padding: "32px 0px"}}>
              <Typography sx={{fontSize: "16px", lineHeight: "20.02px", color: "#2B354F", marginBottom: "8px"}}>Pickup available at our 22 Bistro Place, Banani</Typography>
                
              <Typography sx={{fontSize: "12px", lineHeight: "15.02px", color: "#424242"}}>Usually ready In 2-4 days</Typography>
            </Box>

            {/* Offer Area */}
            <Box sx={{border: "1px solid #D9D9D9", marginBottom: "60px"}}>
            {offer.map(item => (
                <SelectableItem
                key={item.id}
                item={item}
                isSelected={item.id === offerId}
                onSelect={handleOfferSelect}
                />
            ))}
            </Box>

            {/* Info Area */}
            <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
              {productInfo.map(item => (
                <InfoLabel key={item.id} imgSrc={item.iconSrc} text={item.text}/>
              ))}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default ProductDetails








