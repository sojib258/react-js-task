import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const ConsultationSection = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: "auto", md: "380px" },
        backgroundColor: "#F2E7CE",
      }}
    >
      <Grid container>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              width: "100%",
              height: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
              overflow: "hidden",
            }}
          >
            <Box
              component={"img"}
              alt="Image"
              sx={{
                width: { xs: "100%", md: "auto" },
                height: { xs: "auto", md: "380px" },
              }}
              src={"/consultation/flower.png"}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              padding: { xs: "16px", md: "80px" },
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                fontSize: "16px",
                lineHeight: "20.02px",
                color: "#2B354F",
                marginBottom: "10px",
              }}
            >
              Not Sure where to Start?
            </Typography>

            <Typography
              sx={{
                fontSize: "40px",
                lineHeight: "40px",
                color: "#2B354F",
                marginBottom: "24px",
              }}
            >
              {" "}
              Book a Free 25 Minute Consultation
            </Typography>

            <Button
              sx={{
                fontSize: "16px",
                lineHeight: "20.02px",
                color: "#ffffff",
                backgroundColor: "#164F49",
                padding: "14px 50px",
                borderRadius: "0px",
                textTransform: "initial",
                "&:hover": {
                  backgroundColor: "#0b2825",
                },
              }}
            >
              Book Consultation
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ConsultationSection;
