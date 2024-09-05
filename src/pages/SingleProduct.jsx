import Box from "@mui/material/Box";
import Header from "../components/Header";
import Benefit from "../components/Benefit";
import Banner from "../components/Banner";
import RelatedProduct from "../components/RelatedProduct";
import Review from "../components/Review";
import ConsultationSection from "../components/Consultation";
import PromotionalInfo from "../components/PromotionalInfo";
import Footer from "../components/Footer";
import ProductDetails from "../components/ProductDetails";
import TopHeader from "../components/TopHeader";
import BreadCrumb from "../components/BreadCrumb";


const SingleProduct = () => {

    return (
      <Box> 
        {/* Top Header Section */}
        <TopHeader/>

        {/* Header Section */}
        <Box sx={{ position: 'sticky', top: 0, zIndex: 1000 }}>
          <Header />
        </Box>

        {/* Product Section */}

        {/* Breadcrumb */}
        <BreadCrumb/>

        {/* Product Details Section */}
        <ProductDetails/>

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








