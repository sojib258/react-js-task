import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

const ReviewCart = ({name, productName, ratingText, ratingValue, date}) => {

  return (
    // Review Cart Wrapper
    <Box>
      {/* User and Data Part */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBotton: "3px",
        }}
      >
        {/* User Part */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Box
            sx={{ width: "24px", height: "24px", marginRight: "5px" }}
            component={"img"}
            src={"/review/user.png"}
          />
          <Typography
            component={"span"}
            sx={{
              fontSize: "16px",
              lineHeight: "19.31px",
              fontStyle: "italic",
              color: "#2B354F",
              fontWeight: "500",
            }}
          >
            {name}
          </Typography>
        </Box>

        {/* Date Part */}
        <Typography
          sx={{
            fontSize: "16px",
            lineHeight: "19.31px",
            fontStyle: "italic",
            color: "#2B354F",
          }}
        >
          {date}
        </Typography>
      </Box>

      {/* Rating Part */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          marginBottom: "17px",
        }}
      >
        <Rating
          name="simple-controlled"
          value={ratingValue}
          readOnly
          sx={{ fontSize: "16px",  "& .MuiRating-iconFilled": {
            color: "#164F49", // Customize the active color here
          }, }}

        />
        <Typography
          sx={{
            color: "#2B354F",
            fontSize: "16px",
            lineHeight: "20.02px",
            marginLeft: "20px",
          }}
          component={"span"}
        >
          {productName}
        </Typography>
      </Box>

      {/* Rating Comment */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: {xs: "flex-start", sm: "center"},
          flexDirection: {xs: "column", sm: "row"}
        }}
      >
        <Typography
          sx={{ color: "#2B354F", fontSize: "16px", lineHeight: "20.02px", marginBottom: {xs: "12px", sm: "0px"} }}
        >
          {ratingText}
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            minWidth: {xs: "0px", sm: "200px"}
          }}
        >
          <Typography
            sx={{ color: "#2B354F", fontSize: "16px", lineHeight: "20.02px" }}
          >
            {" "}
            Was this helpful?
          </Typography>
          <Box
            component={"img"}
            src={"/review/thumbup.png"}
            sx={{ width: "24px", height: "24px", marginLeft: "10px" }}
          />
          <Box
            component={"img"}
            src={"/review/thumbdown.png"}
            sx={{ width: "20px", height: "20px" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ReviewCart;



