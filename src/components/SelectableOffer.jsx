import React, { useState } from "react";
import { Box, Typography } from "@mui/material";

const SelectableItem = ({ item, isSelected, onSelect }) => {
  return (
    <Box
      onClick={() => onSelect(item.id)}
      sx={{
        width: "100%",
        height: "auto",
        padding: "10px 8px",
        border: "1px solid",
        borderColor: isSelected ? "#2B354F" : "#D9D9D9",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      {/* Left Part */}
      <Box sx={{ display: "flex" }}>
        <Box
          component={"span"}
          sx={{
            display: "inline-block",
            width: "15px",
            height: "15px",
            borderRadius: "50%",
            backgroundColor: isSelected ? "#2B354F" : "#D9D9D9",
            marginRight: "6px",
          }}
        ></Box>
        <Box>
          <Typography
            sx={{
              fontSize: "14px",
              lineHeight: "17.51px",
              color: isSelected ? "#2B354F" : "#D9D9D9",
              marginBottom: "6px",
            }}
          >
            Subscribe & Save 10%
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              lineHeight: "17.51px",
              color: isSelected ? "#2B354F" : "#D9D9D9",
              marginBottom: "6px",
            }}
          >
            FREE SHIPPING + Cancel anytime
          </Typography>

          <Typography
            sx={{
              fontSize: "14px",
              lineHeight: "17.51px",
              color: isSelected ? "#2B354F" : "#D9D9D9",
              marginBottom: "6px",
              textDecoration: isSelected ? "underline" : "none",
            }}
          >
            YOUR SUBSCRIPTION PERKS +
          </Typography>
        </Box>
      </Box>

      {/* Right Part */}
      <Box>
        <Typography
          sx={{
            fontSize: "20px",
            lineHeight: "25px",
            color: isSelected ? "#2B354F" : "#D9D9D9",
          }}
        >
          BDT {item.bdt}
        </Typography>
      </Box>
    </Box>
  );
};

export default SelectableItem;
