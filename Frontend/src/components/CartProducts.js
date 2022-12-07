import React from "react";
import "../App.css";
//import { ProductCart } from "./ProductCart";
import { ThemeProvider, Container, createTheme, Card, Typography, Button } from "@mui/material";
import cart from "../static/cart.json"
import { ShoppingCartCheckout } from "@mui/icons-material";

import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import { Clear } from '@mui/icons-material';
const theme = createTheme({
    palette: {
        primary: {
            main: '#40b988',
            contrastText: 'white',
        },

        secondary: {
            main: '#69f0ae',
            contrastText: '#000000',
        },
    },
});




export const CartProducts = () => {
    const carts = cart
    const total = carts.map(cart => cart.cant * cart.price).reduce((prev, next) => prev + next);

    const listarCarrito = carts.map((product, index) => {

        

        return (
            <div key={index}>
                <Card sx={{ width: '100%', height: '150px', margin: '5px', display: 'flex', p: 2 }}>
                    <CardMedia
                        component="img"
                        image={product.image}
                        alt={product.name}
                        sx={{ maxWidth: '250px', maxHeight: '100%', display: 'block', p: 1 }}
                    />
                    <CardContent sx={{ width: '60%', display: "flex", flexDirection: "column", justifyContent: "center", textAlign: 'center' }}>
                        <Typography gutterBottom variant="subtitle2" component="div">
                            {product.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Cantidad: {product.cant}
                        </Typography>
                        <Typography variant='subtitle1' component='div'>
                            $ {product.price}
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ textAlign: 'center', fontSize: 10, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                        <Button variant="text" size='small' color='primary'><Clear /></Button>
                    </CardActions>
                </Card>
            </div>
        )
    })


    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth='md' sx={{ mt: '50px' }}>
                {listarCarrito}
                <Card sx={{ width: '100%', textAlign: 'center', height: '50px', margin: '5px', display: 'flex', p: 2 }}>
                    <Typography sx={{ width: '30%', fontSize: '30px' }}>Total:</Typography>
                    <Typography sx={{ width: '40%', fontSize: '30px' }}>$ {total}</Typography>
                    <Button href='/clientinfo' variant="contained" sx={{ width: '30%', display: "flex", flexDirection: "column", justifyContent: "center", textAlign: 'center', fontSize: '10px' }}><ShoppingCartCheckout /> Continuar </Button>
                </Card>
            </Container>
        </ThemeProvider>
    );
}

