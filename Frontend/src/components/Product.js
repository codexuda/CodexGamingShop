import React, { useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import Button from '@mui/material/Button';
import { AddShoppingCartOutlined } from '@mui/icons-material';

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


export const Product = ({ product }) => {
const [detalles, setDetalles] = useState([])
  const alCarrito = (product) => {
    setDetalles([...detalles, {
      producto: product.id,
      valorUnitario: product.precio}])
    console.log(detalles)
  }
  

  return (
    
    <ThemeProvider theme={theme}>
      <Card sx={{ width: '100%', height: '150px', margin: '5px', display: 'flex', p: 2 }}>
        <CardMedia
          component="img"
          image={product.urlImagen}
          alt={product.nombre}
          sx={{ maxWidth: '150px', maxHeight: '100%', display: 'block', p: 1 }}
        />
        <CardContent sx={{ width: '60%', display: "flex", flexDirection: "column", justifyContent: "center", textAlign: 'center' }}>
          <Typography gutterBottom variant="h6" component="div">
            {product.nombre}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {product.descripcion}
          </Typography>
        </CardContent>
        <CardActions sx={{ textAlign: 'center', fontSize: 10, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <Typography variant='h5' component='div'>$ {product.precio}</Typography>
          <Button onClick={() => alCarrito(product)} variant="contained" size='large' color='primary' endIcon={<AddShoppingCartOutlined />}>comprar</Button>
        </CardActions>
      </Card>
    </ThemeProvider>

    
  );
}
