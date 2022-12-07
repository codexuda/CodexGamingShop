import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import { ThemeProvider } from '@emotion/react';
import { Button, createTheme } from '@mui/material';
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

export const ProductCart = (product) => {
    return (
        <ThemeProvider theme={theme}>
            <Card sx={{ width: '100%', height:'150px', margin:'5px', display: 'flex', p:2}}>
                <CardMedia
                    component="img"
                    image={product.image}
                    alt={product.name}
                    sx={{maxWidth:'250px',maxHeight:'100%', display:'block', p:1}}
                />
                <CardContent sx={{width:'60%',display: "flex", flexDirection: "column", justifyContent: "center", textAlign:'center'}}>
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
                <CardActions sx={{textAlign:'center', fontSize:10, display: "flex", flexDirection: "column", justifyContent: "center"}}>
                    <Button variant="text" size='small' color='primary'><Clear /></Button>
                </CardActions>
            </Card>
        </ThemeProvider>
    );
}
