import { AppBar, List, ListItem, ListItemButton, ListItemText, Typography ,Badge} from '@mui/material';
import {  Link } from 'react-router';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import { useSelector } from 'react-redux';
import { cart } from '../../Interface/cart';
const Navbar   = ()  => {
    const cartItems = useSelector((state : {cart : cart}) => state.cart)
    const totalCartItems = cartItems.data.reduce((accumulator,currValue) => {
        return accumulator + currValue.quantity
    },0)
  return (
    <AppBar position="sticky" >
        <div style={{display:"flex", justifyContent:'space-between'}}>
            <Typography component="div" padding={2}>
            <Typography component={Link} to='/' style={{textDecoration : 'none',color : "white"}}><Typography variant="h6">Paradise Nursery</Typography></Typography>
            </Typography>
            <Typography component="div" paddingRight={6} >
            <List style={{display:"flex",alignContent:"center"}}>
            <ListItem disablePadding >
                    <ListItemButton component={Link} to="/">
                    <ListItemText primary="Home"  style={{width:'9rem'}}/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding >
                    <ListItemButton component={Link} to="/plant">
                    <ListItemText primary="House Plants"  style={{width:'9rem'}}/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component={Link} to="/cart">
                    <Badge badgeContent={totalCartItems} color="secondary">
                        <AddShoppingCartOutlinedIcon />
                    </Badge>
                    </ListItemButton>
                </ListItem>
                </List>
            </Typography>
        </div>

    </AppBar>
  );
};

export default Navbar;
