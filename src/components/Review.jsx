import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import ReviewCart from "./reusableComp/ReviewCart";

const Review = () => {
    const [video, setVideo] = useState('');

    const handleChange = (event) => {
      setVideo(event.target.value);
    };


    const reviewData = [
      {
        id: 1,
        name: "Betb E.",
        productName: "Great Vitamins",
        ratingValue: 0,
        ratingText: "I love my line up of IWI vitamins and they are by far the best brand I have found.",
        date: "5 june,2024"
      },
      {
        id: 2,
        name: "Martina Decosta.",
        productName: "Good Vitamins",
        ratingValue: 3,
        ratingText: "Algae oil is one of the greatest nutrients on the planet. So grateful iwi makes it available in a pure, trustworthy, high quality, natural form! I can't believe I am already seeing/feeling a difference.",
        date: "1 june,2024"
      },
      {
        id: 3,
        name: "Betb E.",
        productName: "Great Vitamins",
        ratingValue: 2,
        ratingText: "I love my line up of IWI vitamins and they are by far the best brand I have found.",
        date: "23 april,2024"
      },
      
    ]
  return (
    <Box
      sx={{
        backgroundColor: "#fffff6",
        padding: { xs: "10px 20px", sm: "24px 80px" },
        borderBottom: "1px solid #DCD2BB",
        borderTop: "1px solid #DCD2BB",
        marginTop: "40px"
      }}
    >
      {/* Review Top Part Wrapper*/}
      <Box
        sx={{
          width: "100%",
          height: "auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: {xs: "flex-start", md: "center"},
          marginBottom: "60px",
          flexDirection: {xs: "column", md: "row"}
        }}
      >
        {/* Review Top Left Part */}
        <Box sx={{marginBottom: {xs: "32px", md: "0px"}}}>
          <Typography
            component={"h2"}
            sx={{
              fontSize: { xs: "36px", sm: "40px" },
              lineHeight: { xs: "45.04px", sm: "50.04px" },
              color: "#2B354F",
              marginBottom: "16px",
            }}
          >
            Reviews
          </Typography>
          <Button
            sx={{
              color: "#ffffff",
              fontSize: "16px",
              lineHeight: "20.02px",
              backgroundColor: "#164F49",
              borderRadius: "0px",
              padding: { xs: "10px 32px", md: "15px 32px" },
              transition: ".4s",
              "&:hover": {
                backgroundColor: "#0b2825",
              },
            }}
          >
            Write a Review
          </Button>
        </Box>

        {/* Review Top Right Part Wrapper*/}
        <Box
          sx={{
            maxWidth: "500px",
            height: "auto",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{
              fontSize: "16px",
              lineHeight: "20.02px",
              color: "#2B354F",
              borderBottom: "1px solid #2B354F",
              marginBottom: "8px",
            }}
          >
            Filter Reviews
          </Typography>
          
          {/* Review Top Input And Dropdown Wrapper */}
          <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexDirection: {xs: "column", sm: "row"}}}>

            {/* Review Top Input And Dropdown Wrapper InputBox */}
            <Box
              sx={{
                width: "220px",
                height: "auto",
                padding: "11px 40px 11px 10px",
                backgroundColor: "#2B354F",
                position: "relative",
                marginRight: "20px"
              }}
            >
              <input
                type="text"
                placeholder="Search"
                style={{
                  width: "100%",
                  height: "34px",
                  color: "#ffffff",
                  border: "none",
                  outline: "none",
                  backgroundColor: "transparent",
                  fontSize: "18px",
                  lineHeight: "15.01px",
                  "&::placeholder": {
                    color: "#fff",
                  },
                }}
              />
              <style>
                {`
          input::placeholder {
            color: #ffffff; /* Change the placeholder color */
            fontSize: 18px;
          }
        `}
              </style>

              <Box
                component={"img"}
                src={"/review/search.png"}
                alt="Search Icon"
                sx={{ width: "24px", height: "24px", position: "absolute", top: "16px", right: "20px" }}
              />
            </Box>

            {/* Review Top Input And Dropdown Wrapper DropDown Box */}
           
              <FormControl sx={{ width: "220px", }} fullWidth>
                <InputLabel id="demo-simple-select-label">Image & Videos</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={video}
                  label="Image & Videos"
                  onChange={handleChange}
                >
                  <MenuItem value={1}>Video One</MenuItem>
                  <MenuItem value={2}>Video Two</MenuItem>
                  <MenuItem value={3}>Video Three</MenuItem>
                </Select>
              </FormControl>
            {/* </Box> */}
          </Box>
        </Box>
      </Box>

      {/* Review Cart */}
      <Box sx={{marginBottom: "50px", }}>
      {reviewData.map(item => (
        <Box key={item.id} sx={{padding: "10px 0px", borderBottom: "1px solid #DCD2BB", }}>
          <ReviewCart date={item.data} name={item.name} productName={item.productName} ratingText={item.ratingText} ratingValue={item.ratingValue} key={item.id}/>
        </Box>
      ))}
      </Box>
    </Box>
  );
};
export default Review;
