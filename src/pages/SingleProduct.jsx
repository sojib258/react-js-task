import Box from "@mui/material/Box";
import Header from "../components/Header";
import Benefit from "../components/Benefit";
import Banner from "../components/Banner";
import RelatedProduct from "../components/RelatedProduct";
import Review from "../components/Review";
import ConsultationSection from "../components/Consultation";


const SingleProduct = () => {



    return (
      <Box> 
        {/* Header Section */}
        <Header/>
        {/* Product Section */}

        {/* Benefit Section */}
        <Benefit/>

        {/* Banner Section */}
        <Banner/>

        {/* Related Product */}
        <RelatedProduct/>

        {/* Revieww Section */}
        <Review/>

        {/* Consultation Section */}
        <ConsultationSection/>
      </Box>
    )
}


export default SingleProduct;








