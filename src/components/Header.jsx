import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";
import { useState } from "react";
import Link from "@mui/material/Link";
import MenuDrawer from "./MenuDrawer";
import CartDrawer from "./CartDialog";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const [openCart, setOpenCart] = useState(false)

  const toggleMenuOpen = () => {
    setOpenMenu(!openMenu)
  }

  const handleOpenCart = () => {
    setOpenCart(true)
  }

  const handleCloseCart = () => {
    setOpenCart(false)
  }



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
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#F2EBE0",
        padding: {xs: "10px 20px", sm: "10px 80px"},
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/*logo area*/}
      <Link
        href="/"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Box component={"img"} alt="Logo_Image" src={"/header/logo.png"} />
      </Link>
      {/*menu area*/}
      <Box
        component={"ul"}
        sx={{
          display: {xs: "none", md: "flex"},
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        {pages.map((item) => (
          <Box key={item.id} component={"li"} sx={{ marginRight: "40px" }}>
            <Link
              href={item.pageLink}
              sx={{
                color: "#2B354F",
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "20.02px",
                textDecoration: "none",
              }}
            >
              {item.pageName}
            </Link>
          </Box>
        ))}
      </Box>
      {/*button area*/}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Box sx={{width: "18px", height: "18px", cursor: "pointer"}} component={"img"} src={"/header/search.png"}/>
        <Badge sx={{marginLeft: "16px"}}  badgeContent={0} color="success">
          <Box onClick={handleOpenCart} sx={{width: "24px", height: "24px", cursor: "pointer"}} component={"img"} src={"/header/cart.png"}/>
        </Badge>

        {/* This button will display none under medium screen */}
        <Button sx={{display: {xs: "none", md: "block"},color: "#2B354F", fontWeight: "500", fontSize: "16px", lineHeight: "20.02px", textTransform: "initial", padding: "0px", marginLeft: "12px"}}>Sign In</Button>

        {/* This Bar Icon will display under medium screen */}
        <Box onClick={toggleMenuOpen} component={"img"} sx={{display: {xs: "block", md: "none"}, width: "24px", height: "24px", cursor: "pointer", marginLeft: "16px" }} src={"/header/bar.png"}/>
      </Box>

      {/* This is the Menu Drawer */}
      {openMenu && <MenuDrawer open={open} toggleMenuOpen={toggleMenuOpen}/>}
      {/* This is the Cart Drawer */}
      {openCart && <CartDrawer open={openCart} handleClickOpen={handleOpenCart} handleClose={handleCloseCart}/>}

    </Box>
  );
};

export default Header;
