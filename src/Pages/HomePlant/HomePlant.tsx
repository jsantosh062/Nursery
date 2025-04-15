import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

import Typography from '@mui/material/Typography';
import "./HomePlant.css"
import MainLayout from "../../Components/MainLayout"
import { useDispatch,useSelector } from 'react-redux';
import {Plant, plants} from '../../Interface/plants';
import { Button } from '@mui/material';
import Loader from '../../Components/Loader';
import { ADD_TO_CART } from '../../Features/Reducers/cartSlice';
import { PRODUCT_INVENTORY_DECREMENT } from '../../Features/Reducers/homePlantSlice';
const HomePlant = () => {
    const {data,loading} = useSelector((state : {plants : plants}) => state.plants);

    console.log("PLANT_DATA====>",data)
    const dispatch = useDispatch();
    const handleAddToCart = (plant : Plant) => {
        try {
            console.log("PLANT",plant)
            dispatch(ADD_TO_CART(plant))
            dispatch(PRODUCT_INVENTORY_DECREMENT(plant.id))
        }catch (e) {
            console.log("ADD_TO_CART ERROR====>",e)
        }
    }
    return (
        <MainLayout>
            {
                loading ?( <Loader/> ) : (

                   <Box
                   display="flex"
                   flexDirection="row"
                   flexWrap="wrap"      // allow wrapping if too many cards
                   gap={2}              // spacing between cards
                   justifyContent="center"
                   alignItems="flex-start"
                   >
   
                       {data.map((item) => (
                           <Card sx={{ maxWidth: 300, maxHeight:450}} key={item.id}>
                               <CardHeader
                                   // avatar={
                                   // <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                   //     R
                                   // </Avatar>
                                   // }
                                   // action={
                                   // <IconButton aria-label="settings">
                                   //     {/* <MoreVertIcon /> */}
                                   // </IconButton>
                                   // }
                                   title={item.name}
                                   subheader={`quantity : - ${item.quantity}`}
                               />
                               <CardMedia
                                   component="img"
                                   height='190'
                                   image={item.image}
                                   alt={item.name}
                               />
                               <CardContent>
                                   <Typography variant="body2" sx={{ color: 'text.secondary' } } >
                               {item.description}
                                   </Typography>
                               </CardContent>
                               <CardActions style={{display:'flex',justifyContent:'center'}}>
                               <Button variant="contained" disabled  =  {item.quantity ? false : true} onClick={() => handleAddToCart(item)}> Add to Cart</Button>
   
                                           {/* <IconButton aria-label="minus">
                                               <RemoveCircleOutlineRoundedIcon/>
                                           </IconButton>
                                           <Typography component='span'>1</Typography>
                                           <IconButton aria-label="plus">
                                           <AddCircleOutlineIcon/>
                                           </IconButton>                  */}
                               </CardActions>
                               {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
                                   <CardContent>
                                   <Typography sx={{ marginBottom: 2 }}>Method:</Typography>
                                   <Typography sx={{ marginBottom: 2 }}>
                                       Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                                       aside for 10 minutes.
                                   </Typography>
                                   <Typography sx={{ marginBottom: 2 }}>
                                       Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                                       medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                                       occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                                       large plate and set aside, leaving chicken and chorizo in the pan. Add
                                       pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                                       stirring often until thickened and fragrant, about 10 minutes. Add
                                       saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                                   </Typography>
                                   <Typography sx={{ marginBottom: 2 }}>
                                       Add rice and stir very gently to distribute. Top with artichokes and
                                       peppers, and cook without stirring, until most of the liquid is absorbed,
                                       15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                                       mussels, tucking them down into the rice, and cook again without
                                       stirring, until mussels have opened and rice is just tender, 5 to 7
                                       minutes more. (Discard any mussels that don&apos;t open.)
                                   </Typography>
                                   <Typography>
                                       Set aside off of the heat to let rest for 10 minutes, and then serve.
                                   </Typography>
                                   </CardContent>
                               </Collapse> */}
                               </Card>
                       ))}
                   </Box>
                )
            }
             
        </MainLayout>
    )

}

// import {FavoriteIcon} from '@mui/material/icon';
// import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';





export default HomePlant