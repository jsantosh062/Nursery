import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer:React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'primary.main',
        color: 'white',
        py: 2,
        textAlign: 'center',
        mt: 'auto',
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} My MUI App. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
