import { Save, ChevronLeft } from "@mui/icons-material"
import { ThemeProvider, Typography, Button, createTheme, Card, TextField } from "@mui/material";
import { Logo } from "./Logo";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";


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




export const FormEditCliente= () => {


    const idCliente = useParams().id;
    useEffect(() => {
        axios.get(`http://localhost:3050/clientes/${idCliente}`).then(res => {
            console.log(res.data)
            setNombre(res.data.nombre)
            setApellido(res.data.apellido)
            setDireccion(res.data.direccion)
            setCorreo(res.data.correo)
            setIdentificacion(res.data.identificacion)
            setTelefono(res.data.telefono)
            setEdad(res.data.edad)
        }).catch(err => {
            console.log(err)
        })
    }, [idCliente])


    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [correo, setCorreo] = useState('');
    const [direccion, setDireccion] = useState('');
    const [telefono, setTelefono] = useState(0);
    const [edad, setEdad] = useState(0);
    const [identificacion, setIdentificacion] = useState(0);




    const editarCliente = () => {

        const clienteEdit = { id: parseInt(idCliente), nombre, apellido, edad:parseInt(edad), direccion, telefono: parseInt(telefono), identificacion: parseInt(identificacion), correo };

        axios.put('http://localhost:3050/clientes', clienteEdit)
            .then(res => {
                console.log("Cliente editado correctamente")
                setTimeout(window.location.replace('/admin/clients'), 1000)

            }).catch(err => {
                console.log("Error actualizando", err)
            })
    }

    return (

        <ThemeProvider theme={theme}>
            <div className="formulario">
                <Card sx={{
                    width: 300,
                    height: 450,
                    backgroundColor: 'primary',
                    display: 'block',
                    textAlign: 'center',
                    p: 5
                }}><Link to='/'><Logo /></Link>
                    <Typography fontWeight={700}>Editando Cliente ID-{idCliente}</Typography>
                  

                    <TextField value={nombre} placevariant="standard" onChange={(e) => setNombre(e.target.value)} size="small" margin="dense" fullWidth label="Nombre" />
                    <TextField value={apellido} placevariant="standard" onChange={(e) => setApellido(e.target.value)} size="small" margin="dense" fullWidth label="Apellido" />
                    <TextField value={direccion} placevariant="standard" onChange={(e) => setDireccion(e.target.value)} size="small" margin="dense" fullWidth label="Direccion" />
                    <TextField type="number" value={identificacion} placevariant="standard" onChange={(e) => setIdentificacion(e.target.value)} size="small" margin="dense" fullWidth label="Identificacion" />
                    <TextField type="number" value={edad} placevariant="standard" onChange={(e) => setEdad(e.target.value)} size="small" margin="dense" fullWidth label="Edad" />
                    <TextField type="number" value={telefono} placevariant="standard" onChange={(e) => setTelefono(e.target.value)} size="small" margin="dense" fullWidth label="Telefono" />
                    <TextField type="email" value={correo} placevariant="standard" onChange={(e) => setCorreo(e.target.value)} size="small" margin="dense" fullWidth label="Correo" />
                    <div>
                        <Button size="small" href="/admin/clients" variant="contained" startIcon={<ChevronLeft />} sx={{ m: 1 }}>volver</Button>
                        <Button onClick={() => editarCliente()} size="small" variant="contained" endIcon={<Save />} sx={{ m: 1 }}>guardar cliente</Button>
                    </div>
                </Card>
            </div>
        </ThemeProvider>


    )
}