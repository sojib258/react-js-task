import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import ProductCart from "./reusableComp/ProductCart"



const RelatedProduct = () => {

  const productCart = [
    {
      id: 1,
      heading: "Omega-3 Essential",
      amount: 200,
      paragraph: "Get brighter brain energy from nourishing fats and key vitamins in this clever blend.",
      weight: "100mg",
      imgSrc: "/relatedProduct/product1.jpg"
    },
    {
        id: 2,
        heading: "Heart",
        amount: 300,
        paragraph: "Nourish your heart with clinically studied AlmegaPL® EPA for supporting healthy heart and cardiovascular function",
        weight: "200mg",
        imgSrc: "/relatedProduct/product2.jpg",
      },
      {
        id: 3,
        heading: "Omega-3 Minis",
        amount: 400,
        paragraph: "Your favorite omega-3, now in an easier-to-swallow mini size.",
        weight: "300mg",
        imgSrc: "/relatedProduct/product3.jpg"
      }
  ]
      
  return (
    <Box
    sx={{
        backgroundColor: "#fffff6",
        padding: {xs: "10px 20px", sm: "24px 80px"},
        borderBottom: "1px solid #DCD2BB"
      }}> 
      {/* Top Content */}
      <Box sx={{marginBottom: "40px"}}>
        <Typography sx={{fontSize: {xs: "36px", sm: "40px"}, lineHeight: {xs: "45.04px", sm: "50.04px"}, color: "#2B354F", marginBottom: "16px"}} component={"h2"}>Frequently Bought Together</Typography>
        <Typography sx={{fontSize: "16px", fontStyle: "italic", lineHeight: "19.6px", color: "#2B354F"}} component={"p"}>In the dynamic world of e-commerce, the "Frequently Bought Together" feature has become a cornerstone of the online shopping experience. This tool leverages the power of data analytics and consumer behavior insights to suggest complementary products that are often purchased in conjunction with the item a customer is viewing. By highlighting these related products, retailers aim to increase sales, improve customer satisfaction, and streamline the shopping process.</Typography>
      </Box>

      {/* Product Card Area */}
      <Box> 
      <Grid container spacing={4}>
        {productCart.map(item => (
            <Grid key={item.id} item xs={12} md={6} lg={4}>
              <Box sx={{marginBottom: {xs: "32px", lg: "0px"}}}>
                <ProductCart amount={item.amount} heading={item.heading} paragraph={item.paragraph} weight={item.weight} imgSrc={item.imgSrc} />
              </Box>
            </Grid>
        ))}
      </Grid>
      </Box>
    </Box>
  )
}


export default RelatedProduct




