import MainLayout from "../../Components/MainLayout";
import {Link} from 'react-router'
import { Box, Button, Typography } from "@mui/material";
const backgroundStyle = {
    backgroundImage: 'url("https://images.unsplash.com/photo-1501004318641-b39e6451bec6")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100%',
    
  };
const Home = ()=> {
    return (
        <MainLayout>
        <Box sx={backgroundStyle} style={{display : 'flex',alignItems : "center",alignContent : 'center' ,justifyContent : "space-around"}} >
            <div style={{display : 'flex',width:'50%',justifyContent:"center"}}>
                <Button component={Link} variant="contained" to='/plant' > <Typography component="span">Get started</Typography></Button>
            </div>
            <div style={{display : 'flex',width:'50%',textAlign:"center",padding:10}}  >
            Discover the joy of bringing nature indoors!
            At Green Haven, we offer a curated collection of beautiful, easy-to-care-for indoor plants that breathe life into your home. Whether you're a seasoned plant parent or just getting started, we’re here to help you grow a greener, happier space.
            </div>
         </Box>
        
        </MainLayout>
    )
}

export default Home;