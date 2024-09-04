import { Link, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const Footer = () => {
  const socialIcon = [
    {
      id: 1,
      iconSrc: "/footer/first.png",
      iconUrl: "/",
    },
    {
      id: 2,
      iconSrc: "/footer/second.png",
      iconUrl: "/",
    },
    {
      id: 3,
      iconSrc: "/footer/third.png",
      iconUrl: "/",
    },
    {
      id: 4,
      iconSrc: "/footer/forth.png",
      iconUrl: "/",
    },
    {
      id: 5,
      iconSrc: "/footer/fifth.png",
      iconUrl: "/",
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#15322D",
        padding: { xs: "35px 20px", sm: "35px 80px" },
      }}
    >
      <Grid container>
        <Grid itmm xs={12}  md={4}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              marginBottom: {xs: "50px", md: "0px"}
            }}
          >
            <Box
              sx={{ height: "83px", width: "auto" }}
              component={"img"}
              src={"/footer/footerLogo.png"}
            />
          </Box>
        </Grid>

        {/* Footer Middle Part */}
        <Grid itmm xs={12} md={4}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: {xs: "50px", md: "0px"}
            }}
          >
            <Typography
              sx={{
                fontSize: "16px",
                textAlign: "center",
                lineHeight: "20.02px",
                color: "#fff",
                marginBottom: "27px",
              }}
            >
              Subscribe to the newsletter and always stay updated on the latest
              news and exclusive promotions.
            </Typography>
            <Box sx={{width: "100%", height: "auto", position: "relative"}}> 
              <input style={{border: "none", outline: "none", borderBottom: "1px solid #fff", color: "#D9D9D9", padding: "6px 100px 6px 2px", fontSize: "16px", lineHeight: "20.02pxx", backgroundColor: "transparent"}} placeholder="Your Email address" type="email"/>
              <button style={{display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "transparent", border: "none", outline: "none", cursor: "pointer", color: "#fff", position: "absolute", top: "4px", right: "10px"}}>Submit <img src="/footer/arrow.png"/></button>
            </Box>
          </Box>
        </Grid>

        {/* Third Part Start */}
        <Grid itmm xs={12} md={4}>
          <Box
            sx={{
              maxWidth: {xs: "100%", md: "230px"},
              marginLeft: "auto",
              textAlign: {xs: "center", md: "left"}
            }}
          >
            <Typography
              sx={{
                fontSize: "16px",
                lineHeight: "16px",
                color: "#ffffff",
                marginBottom: "12px",
              }}
            >
              We are here to help
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: {xs: "center", md: "flex-start"},
                alignItems: "center",
              }}
            >
              {socialIcon.map((item) => (
                <Link key={item.id} href={item.iconUrl}>
                  <Box
                    src={item.iconSrc}
                    component={"img"}
                    sx={{ width: "36px", height: "36px", margin: "0px 5px" }}
                  />
                </Link>
              ))}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;

