import React, { useEffect, useState } from "react"
import { Container } from "@mui/system"
import { Venta } from "./Venta"
import axios from "axios"

export const ListaVentas = () => {

    const[ventas,setVentas]=useState([])

    useEffect(()=>{
        axios.get('http://localhost:3050/ventas').then(res=>{
            console.log(res.data)
            setVentas(res.data)
        }).catch(err=>{
            console.log(err)
        })
    },[])
    


    const listaVentas=ventas.map(venta=>{return(<div key={venta._id}><Venta venta={venta}/></div>)})

    return (
        <Container maxWidth="md">
            {listaVentas}
        </Container>
    )
}