import React, { useContext } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import {ProductContext} from "./ProductContext";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { Link } from "react-router-dom";

function Navbar(){
    const{quantity}=useContext(ProductContext)
    return(
        <>
        <AppBar position="static">
         <Toolbar disableGutters>
         <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
           
           
           <Typography variant="h5" component="div" sx={{flexGrow:1}}>
               FURNITURES
           </Typography>
           <Box className="nav-btn">
             <Button><Link className="link" to='/home' >Home</Link></Button>
             <Button><Link className="link" to='/about' >About</Link></Button>
             <Button><Link className="link" to='/dashboard' >Dashboard</Link></Button>
             <IconButton>
                <Badge  className='badge-cart' badgeContent={quantity} color="secondary">
                  <ShoppingCartIcon />
                </Badge>
             </IconButton>
           </Box>
         </Toolbar>
        </AppBar>
        </>
    );
}
export default Navbar;