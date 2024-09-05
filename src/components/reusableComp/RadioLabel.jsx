import React from "react";
import { Radio, RadioGroup, FormControlLabel, FormControl, Box } from "@mui/material";

const RadioLabel = ({ options, selectedValue, onChange }) => {
  return (
    <FormControl component="fieldset">
      <RadioGroup
        row
        aria-label="custom-radio"
        value={selectedValue}
        onChange={onChange}
      >
        {options.map((option) => (
          <FormControlLabel
            key={option.id}
            value={option.value}
            control={
              <Radio
                sx={{
                  color: "#D9D9D9",
                  '&.Mui-checked': {
                    color: "#164F49",
                  },
                  width: {xs: "10px", sm: "auto"},
                  height: "auto",
                  '& .MuiSvgIcon-root': {
            fontSize: {xs: "10px", sm: "12px", md: "14px", lg: "16px"},
          },
                }}
              />
            }
            label={
              <Box
                sx={{
                  color: selectedValue === option.value ? "#164F49" : "#2B354F",
                  fontSize: {xs: "12px", sm: "16px"}
                }}
              >
                {option.label}
              </Box>
            }
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default RadioLabel;
