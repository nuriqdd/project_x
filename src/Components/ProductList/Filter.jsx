import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Slider,
} from "@mui/material";
import React from "react";

const Filter = ({ type, setType, price, setPrice }) => {
  // console.log(price);
  return (
    <div>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">По категориям</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="all"
          name="radio-buttons-group"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <FormControlLabel
            value="France"
            control={<Radio />}
            label="Франция"
          />
          <FormControlLabel value="USA" control={<Radio />} label="USA" />
          <FormControlLabel value="Italy" control={<Radio />} label="Италия" />
          <FormControlLabel value="Spain" control={<Radio />} label="Испания" />
          <FormControlLabel value="Russia" control={<Radio />} label="Россия" />

          <FormControlLabel
            value="all"
            control={<Radio />}
            label="Все товары"
          />
        </RadioGroup>
        <FormLabel id="demo-radio-buttons-group-label">По ценам</FormLabel>
        <Slider
          sx={{ width: "80%", mb: 5 }}
          getAriaLabel={() => "Temperature range"}
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          valueLabelDisplay="auto"
          // getAriaValueText={valuetext}
          min={0}
          max={1500}
        />
      </FormControl>
    </div>
  );
};

export default Filter;
