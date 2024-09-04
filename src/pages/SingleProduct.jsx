import Box from "@mui/material/Box";
import Header from "../components/Header";
import Benefit from "../components/Benefit";
import Banner from "../components/Banner";
import RelatedProduct from "../components/RelatedProduct";
import Review from "../components/Review";
import ConsultationSection from "../components/Consultation";
import PromotionalInfo from "../components/PromotionalInfo";
import Footer from "../components/Footer";


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

        {/* Promotional Info Section */}
        <PromotionalInfo/>

        {/* Footer Section */}
        <Footer/>
      </Box>
    )
}


export default SingleProduct;








