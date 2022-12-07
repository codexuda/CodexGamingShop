import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@emotion/react';
import { createTheme} from '@mui/material';
import Button from '@mui/material/Button';
import { AccountBox, Delete, Edit } from '@mui/icons-material';
import axios from 'axios';


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



export const Cliente = ({ cliente }) => {

    const obtener = (id) => {
        window.location.replace(`/admin/edit-client/${id}`)
    }

    const eliminar = (id) => {
        axios.delete(`http://localhost:3050/clientes/${id}`).then(res=>{
                console.log(`Cliente con id: ${id} eliminado`)
                window.location.reload(true);
            }).catch(err=>{
                console.log(err)
            })
    }

    return (
        <ThemeProvider theme={theme}>
            <Card sx={{ width: '100%', height: '300px', margin: '5px', display: 'flex', p: 2 }}>
                <CardContent sx={{ width: '70%', display: "flex", flexDirection: "column", justifyContent: "center", textAlign: 'left' }}>
                    <Typography textAlign={"center"} variant="button" color="text.secondary">
                        <AccountBox sx={{fontSize:14}}/> <strong>CLIENTE ID-{cliente.id}</strong>
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                        <strong>Nombre:</strong> {cliente.nombre}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                        <strong>Apellido:</strong> {cliente.apellido}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                        <strong>Identificacion:</strong> {cliente.identificacion}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                        <strong>Edad:</strong> {cliente.edad}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                        <strong>email:</strong> {cliente.correo}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                        <strong>Telefono:</strong> {cliente.telefono}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                        <strong>Direccion:</strong> {cliente.direccion}
                    </Typography>
                </CardContent>
                <CardActions sx={{ width: '30%', textAlign: 'center', fontSize: 10, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    
                    <Button onClick={() => { obtener(cliente.id) }} variant="contained" size='large' color='primary' endIcon={<Edit />} sx={{ m: 1 }}>editar</Button>
                    <Button onClick={()=>{eliminar(cliente.id)}} variant="outlined" size='large' color='primary' endIcon={<Delete />} sx={{ m:1 }}>borrar</Button>
                
                </CardActions>
            </Card>
        </ThemeProvider>
    );
}