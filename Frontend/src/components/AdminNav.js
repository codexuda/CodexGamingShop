import { Card, Container, ThemeProvider, createTheme, Divider, Button, Typography } from "@mui/material"
import "../App.css";
import { Link } from "react-router-dom";

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

export const AdminNav = () => {
    return (<ThemeProvider theme={theme}>
        <Container maxWidth="sm" sx={{ alignContent: 'center', justifyContent: 'center' }}>
            <Card sx={{
                mt:10,
                width: '100%',
                height: 200,
                backgroundColor: 'primary',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                p:2
            }}>
                <Typography variant="overline"> administración</Typography>
                <Divider />
                <Button sx={{ m: 1 }} variant='outlined' component={Link} to='/admin/products'>Administrar Productos</Button>
                <Button sx={{ m: 1 }} variant='outlined' component={Link} to='/admin/clients'>Administrar Clientes</Button>
                <Button sx={{ m: 1 }} variant='outlined' component={Link} to='/admin/sells'>Administrar Ventas</Button>
            </Card>
        </Container>
    </ThemeProvider >)
}