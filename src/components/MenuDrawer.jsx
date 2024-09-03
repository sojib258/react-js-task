
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Link from "@mui/material/Link";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const MenuDrawer = ({open, toggleMenuOpen}) => {
  
    
  const pages = [
    {
      id: 1,
      pageName: "Shop",
      pageLink: "/",
    },
    {
      id: 2,
      pageName: "Prescription",
      pageLink: "/",
    },
    {
      id: 3,
      pageName: "Book a Therapy",
      pageLink: "/",
    },
    {
      id: 4,
      pageName: "Blog",
      pageLink: "/",
    },
    {
        id: 5,
        pageName: "Sign In",
        pageLink: "/",
      },
  ];
  

  return (
    <Drawer anchor="left" open={open} >
      <Box sx={{ width: "100vw" }} role="presentation" >
        {/* Mobile Menu Wrapper*/}
        <Box sx={{width: "100%", height: "100vh"}}> 

        {/* Mobile Menu Header Part */}
        <Box sx={{display: "flex", backgroundColor: "#F2EBE0", justifyContent: "space-between", alignItems: "center", width: "100%", height: "auto", padding: "10px 24px", borderBottom: "1px solid #DCD2BB"}}>
        <Box component={"img"} src='/header/mobileLogo.png' sx={{width: "100px", height: "auto", cursor: "pointer"}}></Box>
          <Box onClick={toggleMenuOpen} component={"img"} src='/header/icon.png' sx={{width: "24px", height: "24px", cursor: "pointer"}}></Box>
        </Box>

        {/* Navigation Links Part */}
        <Box
        component={"ul"}
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          height: "100%",
        }}
      >
        {pages.map((item) => (
          <Box key={item.id} component={"li"} sx={{ marginBottom: "42px", border: "1px dashed #DCD2BB", width: "100%", height: "auto", textAlign: "center", padding: "10px 20px",  lineHeight: "45.04px", transition: ".3s ease", cursor: "pointer", "&:hover": {backgroundColor: "#DCD2BB"}}}>
            <Link
              href={item.pageLink}
              sx={{
                color: "#2B354F",
                fontWeight: "500",
                fontSize: {xs: "24px", sm: "36px"},
                textDecoration: "none", 
              }}
            >
              {item.pageName}
            </Link>
          </Box>
        ))}
      </Box>

        </Box>
      <Divider />
    </Box>
    </Drawer>
  );
}

export default MenuDrawer;

