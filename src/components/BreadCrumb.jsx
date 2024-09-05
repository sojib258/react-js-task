import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

function handleClick(event) {
  event.preventDefault();
}

const BreadCrumb = () => {
  const breadcrumbs = [
    <Link sx={{ fontSize: "12px", color: "#2b354f" }} underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
      Home
    </Link>,
    <Typography key="3" sx={{ fontSize: "12px", color: "#2b354f" }}>
      Vitamin C Supplements
    </Typography>,
  ];

  return (
    <Box spacing={2} sx={{
        padding: {xs: "10px 20px", sm: "10px 80px"}, borderTop: "1px solid #DCD2BB", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
      <img style={{width: "25px", height: "auto"}} src="/breadcrumb/heart.png" alt="Heart Logo" />
    </Box>
  );
}

export default BreadCrumb
