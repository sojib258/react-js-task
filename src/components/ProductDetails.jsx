import { Typography } from "@mui/material";
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Rating from "@mui/material/Rating";
import ButtonLabel from "./reusableComp/ButtonLabel";
import { useState, useEffect } from "react";
import RadioLabel from "./reusableComp/RadioLabel";
import SelectableItem from "./SelectableOffer";
import { useCart } from "../contextApi/CartContext";
import InfoLabel from "./reusableComp/InfoLabel";
import CustomPaging from "./Carousel";
import toast from 'react-hot-toast';

const ProductDetails = () => {

    const [selectSize, setSelectSize] = useState(null)
    const [selectedValue, setSelectedValue] = useState('');
    const [offerId, setOfferId] = useState(1);
    const {addToCart, decrementQuantity} = useCart()

    const productDetails = {
      id: 1, 
      name: "Liposomal Vitamin C",
      ratingValue: 3,
      price: 4332.23,
      pickupText: "Pickup available at our 22 Bistro Place, Banani",
      readyDays: "2-4",
      imgSrc: "/product/productThumbnail1.jpg",
      details: [
        {
          id: 10,
          text: "Liposomal Vitamin C is an advanced form of Vitamin C encapsulated within liposomes, which are tiny fat-like particles that enhance its absorption and bioavailability in the body."
        }, 
        {
          id: 11,
          text: "This delivery method allows for more efficient cellular uptake, ensuring that higher levels of Vitamin C reach the bloodstream and tissues.",
        }, 
        {
          id: 12,
          text: "It provides potent antioxidant support, boosts the immune system, promotes collagen production, and enhances skin health. Liposomal Vitamin C is ideal for those seeking maximum benefits from their Vitamin C supplementation."
        }, 
      ],
      sizes: [
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
      ],
      flavor: [
        { id: 1, value: "orange", label: "Orange" },
        { id: 2, value: "blueBerry", label: "Blue Berry" },
        { id: 3, value: "lime", label: "Lime" },
      ],
      offer: [
        {
          id: 1,
          bdt: 800
        },
        {
            id: 2,
            bdt: 200
          }
      ],
      productInfo: [
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
    }

    const {id, name, ratingValue, price, details, flavor, pickupText, readyDays, sizes, offer, imgSrc, productInfo} = productDetails


  const handleOfferSelect = (id) => {
    setOfferId(id);
  };

  const handleToggle = (id) => {
    setSelectSize(id);
  };

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <Box sx={{
        backgroundColor: "#fffff6",
        padding: {xs: "10px 20px", sm: "50px 80px"},
        borderTop: "1px solid #DCD2BB"
      }}> 
      <Grid container> 
        <Grid item xs={12} md={6}>
          {/* Product Left Part */}
          <Box sx={{width: "100%", height: "auto", paddingRight: {xs: "0px", md: "10px"}}}>
            <CustomPaging/>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}> 

         {/* Product Description Part */}
          <Box sx={{paddingLeft: {xs: "0px", md: "10px"}, marginTop: {xs: "120px", md: "0px"}}}> 
            <Box sx={{display: "flex", justifyContent: "flex-start", alignItems: "center", marginBottom: "16px"}}> 
            <Rating
              name="simple-controlled"
              value={ratingValue}
              readOnly
              sx={{
                fontSize: "16px",
                "& .MuiRating-iconFilled": {
                  color: "#164F49", // Customize the active color here
                },
              }}
            />;
            <button style={{border: "none", outline: "none", backgroundColor: "transparent", fontSize: "12px", lineHeight: "15px", color: "#2B354F", marginLeft: "15px", textDecoration: "underline", cursor: "pointer"}}>See all reviews</button>
            </Box>

            <Typography component={"h2"} sx={{fontSize: "40px", lineHeight: "48.28px", color: "#2B354F", fontStyle: "italic", fontWeight: "600", marginBottom: "16px"}}>{name}</Typography>

            <Typography sx={{fontSize: "32px", lineHeight: "32px", color: "#2B354F", fontStyle: "italic",  marginBottom: "16px"}}>{`BDT ${price}`}</Typography>

            {details.map(item => (
              <Typography key={item.id} sx={{fontSize: "16px", lineHeight: "20.02px", color: "#2B354F", marginBottom: "16px"}}> {item.text}</Typography>
            ))}

            {/* Select Sizes */}
            <Box sx={{display: "flex", justifyContent: "flex-start", flexWrap: "wrap", alignItems: "center",  marginBottom: "16px"}}> 
                <Typography sx={{fontSize: {xs: "12px", sm: "16px"}, lineHeight: "20.02px", color: "#2B354F", marginRight: "8px"}}>Select Size:</Typography>
                
                {sizes.map(item => (
                  <Box key={item.id} sx={{margin: {xs: "5px 2px", md: "5px 5px"}}}> 
                    <ButtonLabel key={item.id}
                    text={item.text}
                    isSelected={selectSize === item.id}
                    onClick={() => handleToggle(item.id)}/>
                  </Box>
                ))}
            </Box>

            {/* Select Flabour */}
            <Box sx={{display: "flex", justifyContent: "flex-start", alignItems: "center",  marginBottom: "16px"}}> 
                <Typography sx={{fontSize: {xs: "12px", sm: "16px"}, lineHeight: "20.02px", color: "#2B354F", marginRight: "8px", width: {xs: "85px", sm: "auto"}}}>Select Flavor:</Typography>
                <RadioLabel options={flavor}
                  selectedValue={selectedValue}
                  onChange={handleRadioChange}/>
              </Box>

            {/* Add to Cart Button */}

            <Box sx={{width: "100%", height: "auto", padding: "10px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#164F49", marginBottom: "16px"}}> 
                <Box sx={{cursor: "pointer", width: "30px", height:  "10px", display: "flex", alignItems: "center", justifyContent: "center"}}  
                onClick={() => decrementQuantity(id)} >
                  <img src="/product/minus.png" alt="Minus Icon" />
                </Box>

                <Typography  sx={{fontSize: "24px", lineHeight: "30.02px", color: "#ffffff", textAlign: "center"}}>Add to Cart</Typography>

                <Box sx={{cursor: "pointer",width: "30px", height:  "10px", display: "flex", alignItems: "center", justifyContent: "center"}} onClick={() => {
                      addToCart({
                        id: id,
                        name: name,
                        quantity: 1,
                        price: price,
                        img: imgSrc,
                      });
                      toast.success(`${name} added to cart!`);
                    }}>
                  <img src="/product/plus.png" alt="Plus Icon" />
                </Box>
            </Box>

            <Box sx={{width: "100%", height: "auto", padding: "32px 0px"}}>
              <Typography sx={{fontSize: "16px", lineHeight: "20.02px", color: "#2B354F", marginBottom: "8px"}}>{pickupText}</Typography>
                
              <Typography sx={{fontSize: "12px", lineHeight: "15.02px", color: "#424242"}}>Usually ready In {readyDays} days</Typography>
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
            <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "flex-start"}}>
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








