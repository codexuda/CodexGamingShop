import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { ThemeProvider } from '@emotion/react';
import { createTheme, Divider } from '@mui/material';
import { Email, PermIdentityOutlined } from '@mui/icons-material';

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

export const Venta = ({ venta }) => {


    const listaDetalles = venta.detalles.map((detalle, index) => {
        return (<Typography noWrap variant='overline' color="text.secondary" sx={{ fontSize: '9px' }} component="div" key={index}>
            {detalle.producto.nombre} x {detalle.cantidad}
            </Typography>)
    })

    return (
        <ThemeProvider theme={theme}>
            <Card sx={{ width: '100%', height: '200px', margin: '5px', display: 'flex', p: 2 }}>
                <CardContent sx={{ width: '30%', display: "flex", flexDirection: "column", justifyContent: "center", textAlign: 'center' }}>

                    <Typography variant='overline' color="text.secondary">datos del cliente</Typography>
                    <Typography gutterBottom variant="subtitle2" component="div">
                        <Email sx={{ fontSize: 16 }} /> {venta.cliente.correo}
                    </Typography>
                    <Typography gutterBottom variant="subtitle2" component="div">
                        <PermIdentityOutlined sx={{ fontSize: 16 }} /> {venta.cliente.identificacion}
                    </Typography>
                    <Typography variant="overline" color="text.secondary">
                        Fecha: {venta.fecha}
                    </Typography>
                </CardContent>
                <Divider orientation="vertical" variant="middle" flexItem />
                <CardContent sx={{ width: '45%', textAlign: 'center', fontSize: 10, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <Typography variant='overline' color="text.secondary">
                        <strong>detalles</strong>
                    </Typography>
                        {listaDetalles}
                </CardContent>
                <Divider orientation="vertical" variant="middle" flexItem />
                <CardContent sx={{ width: '25%', textAlign: 'center', fontSize: 10, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <Typography variant='h6' component='div'>$ {venta.valor}</Typography>
                    <Typography variant="overline" color="text.secondary">
                        <strong>{venta.estado}</strong>
                    </Typography>
                    <Typography color="text.secondary" variant="overline" sx={{ fontSize: '9px' }}>
                        #{venta._id}
                    </Typography>
                </CardContent>
            </Card>
        </ThemeProvider>
    );
}