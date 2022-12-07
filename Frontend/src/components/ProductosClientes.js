import React, { useState, useEffect } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { AddShoppingCartOutlined } from '@mui/icons-material';

import { Container } from "@mui/system"
//import { Product } from "./Product"
import axios from "axios"
import { Button, createTheme, ThemeProvider, Tooltip } from "@mui/material"
import { ShoppingCart } from "@mui/icons-material"

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



export const ProductosClientes = () => {

    const [productos, setProductos] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3050/productos').then(res => {
            console.log(res.data)
            setProductos(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    const [carrito, setCarrito] = useState([])

    const addCarrito = (product) => {

        alert("Agregado al carrito")
        const productoExistente = carrito.find((item) => item.producto === product.id)

        if (productoExistente) {
            setCarrito(
                carrito.map((productoExistente) => {
                    if (productoExistente.producto === product.id) {
                        return {
                            ...productoExistente, cantidad: productoExistente.cantidad + 1
                        }
                    }
                    else return productoExistente;
                }

                )
            )
        } else {
            setCarrito([...carrito, {
                producto: product.id,
                valorUnitario: product.precio,
                cantidad: 1
            }
            ])

        }
    }

    

    const listarProductos = productos.map(producto => {
        return (
            <div key={producto._id}><Card sx={{ width: '100%', height: '150px', margin: '5px', display: 'flex', p: 2 }}>
                <CardMedia
                    component="img"
                    image={producto.urlImagen}
                    alt={producto.nombre}
                    sx={{ maxWidth: '150px', maxHeight: '100%', display: 'block', p: 1 }}
                />
                <CardContent sx={{ width: '60%', display: "flex", flexDirection: "column", justifyContent: "center", textAlign: 'center' }}>
                    <Typography gutterBottom variant="h6" component="div">
                        {producto.nombre}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                        {producto.descripcion}
                    </Typography>
                </CardContent>
                <CardActions sx={{ textAlign: 'center', fontSize: 10, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <Typography variant='h5' component='div'>$ {producto.precio}</Typography>
                    <Button onClick={() => addCarrito(producto)} variant="contained" size='large' color='primary' endIcon={<AddShoppingCartOutlined />}>comprar</Button>
                </CardActions>
            </Card>
            </div>
        )
    })



    return (
        <ThemeProvider theme={theme}>
            <div className="botonAgregar">
                <Tooltip placement="bottom" title='Click para ver carrito'>
                    <Button href='/cart' size='large' variant='contained' endIcon={<ShoppingCart />}>carrito ({carrito.length})</Button>
                </Tooltip>
                
            </div>
            <Container maxWidth="md">
                {listarProductos}
            </Container>
        </ThemeProvider>
    )
}

