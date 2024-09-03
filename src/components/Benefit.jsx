import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

const Benefit = () => {
  return (
    <Box
      sx={{
        padding: { xs: "10px 20px", sm: "10px 80px" },
      }}
    >
      <Grid container>
        {/* Benefit Accordion Part */}
        <Grid order={{md: 2}} item xs={12} md={6}>
          <Box
            sx={{
              width: "100%",
              height: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: {xs: "20px", md: "0px"}
            }}
          >
            <Box
              sx={{ width: {xs: "100%", md: "auto"}, height: {xs: "auto", md: "500px"} }}
              component={"img"}
              src={"/benefit/food.png"}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Accordion sx={{width: "100%"}} defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{fontSize: "24px", fontWeight: "500", lineHeight: "30.02px", color: "#2B354F"}}
              >
                Benefits
              </AccordionSummary>
              <AccordionDetails sx={{fontSize: {xs: "12px", md: "16px"}, fontWeight: "500", lineHeight: "22.4px", color: "#424242"}}>
                Support healthy aging <br />
                Boost collagen production <br />
                Support a healthy immune system <br />
                PRO-TIP: For enhanced immunity take with Cymbiotika’s D3+ K2 +
                CoQ10.
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
                sx={{fontSize: "24px", fontWeight: "500", lineHeight: "30.02px", color: "#2B354F"}}
              >
                Ingredients
              </AccordionSummary>
              <AccordionDetails sx={{fontSize: {xs: "12px", md: "16px"}, fontWeight: "500", lineHeight: "22.4px", color: "#424242"}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium maxime assumenda alias odit quis et rerum
                perspiciatis, fugit obcaecati, temporibus asperiores, suscipit
                ducimus illo aut?
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
                sx={{fontSize: "24px", fontWeight: "500", lineHeight: "30.02px", color: "#2B354F"}}
              >
                How to Use
              </AccordionSummary>
              <AccordionDetails sx={{fontSize: {xs: "12px", md: "16px"}, fontWeight: "500", lineHeight: "22.4px", color: "#424242"}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium maxime assumenda alias odit quis et rerum
                perspiciatis, fugit obcaecati, temporibus asperiores, suscipit
                ducimus illo aut?
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
                sx={{fontSize: "24px", fontWeight: "500", lineHeight: "30.02px", color: "#2B354F"}}
              >
                Cautions
              </AccordionSummary>
              <AccordionDetails sx={{fontSize: {xs: "12px", md: "16px"}, fontWeight: "500", lineHeight: "22.4px", color: "#424242"}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium maxime assumenda alias odit quis et rerum
                perspiciatis, fugit obcaecati, temporibus asperiores, suscipit
                ducimus illo aut?
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
                sx={{fontSize: "24px", fontWeight: "500", lineHeight: "30.02px", color: "#2B354F"}}
              >
                Shipping and returns
              </AccordionSummary>
              <AccordionDetails sx={{fontSize: {xs: "12px", md: "16px"}, fontWeight: "500", lineHeight: "22.4px", color: "#424242"}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium maxime assumenda alias odit quis et rerum
                perspiciatis, fugit obcaecati, temporibus asperiores, suscipit
                ducimus illo aut?
              </AccordionDetails>
            </Accordion>
          </Box>
        </Grid>
        
      </Grid>
    </Box>
  );
};

export default Benefit;


