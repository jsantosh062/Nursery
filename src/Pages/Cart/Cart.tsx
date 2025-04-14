import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded';
import MainLayout from '../../Components/MainLayout';
import { cart } from '../../Interface/cart';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../Components/Loader';
import { Plant, plants } from '../../Interface/plants';
import { ADD_TO_CART, REMOVE_FROM_CART } from '../../Features/Reducers/cartSlice';
import { PRODUCT_INVENTORY_DECREMENT, PRODUCT_INVENTORY_INCREMENT } from '../../Features/Reducers/homePlantSlice';

const Cart = () =>  {
  const {data,loading} = useSelector((state : {cart : cart}) => state.cart)
  const plantsData = useSelector((state : {plants : plants}) => state.plants)
  const dispatch = useDispatch();
  const handleOutOfStock  = (id:number) : boolean => {
     return plantsData.data.find((val) => val.id == id && !val.quantity) ? true : false
  }
  const handleIncrement = (plant : Plant) => {
    try {
        dispatch(ADD_TO_CART(plant));
        dispatch(PRODUCT_INVENTORY_DECREMENT(plant.id))
    }catch (e) {
        console.log("HANDLE_CART_INCREMENT==>",e)
    }

  }
  const handleDecrement = (plant : Plant) => {
    try {
        dispatch(REMOVE_FROM_CART(plant));
        dispatch(PRODUCT_INVENTORY_INCREMENT(plant.id))
    }catch (e) {
        console.log("HANDLE_CART_INCREMENT==>",e)
    }
  }
    console.log("CART_DATA===>",data)
    return (
        <MainLayout>
         {    
         loading ?( <Loader/> ) : (
            data && data.map((item) =>(
                <Box  sx={{ display: 'flex', flexDirection: 'column', padding:2 }} key = {item.plant.id}>

                <Card sx={{ display: 'flex',    height : 100      }}>
                <CardContent sx={{ flex: '1 0 auto', justifyContent : 'center'}}>
                    <Typography component="div" variant="h5">
                        {item.plant.name}
                    </Typography>
                    <Typography
                    variant="subtitle1"
                    component="div"
                    sx={{ color: 'text.secondary' }}
                    >
                    Mac Miller
                    </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                    <IconButton aria-label="Subtract" onClick={()=> handleDecrement(item.plant)}>
                    <RemoveCircleOutlineRoundedIcon />
                    </IconButton>
                    <Typography component='span'>{item.quantity}</Typography>

                    <IconButton aria-label="Add" onClick={()=> handleIncrement(item.plant)} disabled = {handleOutOfStock(item.plant.id)}>
                    <AddCircleOutlineIcon /> 
                    </IconButton>
                </Box>
                <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={item.plant.image}
                alt="Live from space album cover"
                />
            </Card>
            </Box>

         )
            ) 
         )
         }
        </MainLayout>
    )
}

export default Cart;