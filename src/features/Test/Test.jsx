// App.js or any component
import React, { useState } from 'react';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Test() {
  const [value, setValue] = useState([100, 1000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 300, margin: '50px auto' }}>
      <Typography variant="h6" gutterBottom>
        Price Range: EGP {value[0]} – EGP {value[1]}
      </Typography>
      <Slider
  value={value}
  onChange={handleChange}
  valueLabelDisplay="auto"
  min={0}
  max={1400}
  sx={{
    height: 6,
    '& .MuiSlider-track': {
      backgroundColor: '#000',
      height: 2,
    },
    '& .MuiSlider-rail': {
      backgroundColor: 'black',
      height: 2,
    },
    '& .MuiSlider-thumb': {
      height: 20,
      width: 20,
      backgroundColor: '#fff',
      border: '2px solid #000',
      boxShadow: 'none',
      '&:hover': { boxShadow: 'none' },
      '&:focus': { boxShadow: 'none', outline: 'none' },
      '&:active': { boxShadow: 'none' },
      '&:focus-visible': { boxShadow: 'none', outline: 'none' },
    },
  }}
/>

    </Box>
  );
}

