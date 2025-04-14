



import React from 'react';
import { Box, Container } from '@mui/material';
import Navbar from '../Navbar';
import Footer from '../Footer';
import CssBaseline from '@mui/material/CssBaseline';
type MainLayoutProps = {
  children: React.ReactNode;
};
const MainLayout :  React.FC<MainLayoutProps> = ({ children, }) => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Navbar />
      <CssBaseline />
      <Container component="main" sx={{ flex: 1, py: 4 }}>
        {children}
      </Container>
      <Footer />
    </Box>
  );
};

export default MainLayout;

