import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import Button from '@mui/material/Button';
import { Delete, Edit, InventoryOutlined } from '@mui/icons-material';

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

const eliminar = (id) => {
    axios.delete(`http://localhost:3050/productos/${id}`).then(res=>{
            console.log(`Producto con id: ${id} eliminado`)
            window.location.reload(true);
        }).catch(err=>{
            console.log(err)
        })
}

const obtener = (id) => {
    window.location.replace(`/admin/edit-product/${id}`)
}

export const Producto = ({ product }) => {
    return (
        <ThemeProvider theme={theme}>
            <Card sx={{ width: '100%', height: '150px', margin: '5px', display: 'flex', p: 2 }}>
                <CardContent sx={{ width: '80%', display: "flex", flexDirection: "column", justifyContent: "center", textAlign: 'left' }}>
                <Typography textAlign={"center"} variant="button" color="text.secondary">
                        <InventoryOutlined sx={{fontSize:16}}/> <strong>PRODUCTO ID-{product.id}</strong>
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                    <strong>Nombre:</strong>
                    {product.nombre}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                    <strong>Descripcion:</strong>{product.descripcion}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                    <strong>Precio:</strong> ${product.precio}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                    <strong>Stock:</strong> {product.existencia}
                    </Typography>
                </CardContent>
                <CardMedia
                    component="img"
                    image={product.urlImagen}
                    alt={product.nombre}
                    sx={{ maxWidth:'150px',maxHeight:'100%', display:'block', p:1}}
                />
                <CardActions sx={{ width:'20%', textAlign: 'center', fontSize: 10, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <Button title="Editar producto" onClick={()=>{obtener(product.id)}} variant="contained" size='small' color='primary' endIcon={<Edit />} sx={{ m:1 }}>editar</Button>
                <Button title="Borrar producto" onClick={()=>{eliminar(product.id)}} variant="contained" size='small' color='primary' endIcon={<Delete />} sx={{ m:1 }}>borrar</Button>
                </CardActions>
            </Card>
        </ThemeProvider>
    );
}
