import React, { useEffect, useState } from "react"
import { Container } from "@mui/system"
import { Cliente } from "./Cliente"
import axios from "axios"


export const ListaClientes = () => {

    const[clientes,setClientes]=useState([])

    useEffect(()=>{
        axios.get('http://localhost:3050/clientes').then(res=>{
            console.log(res.data)
            setClientes(res.data)
        }).catch(err=>{
            console.log(err)
        })
    },[])
    


    //const listaClientes=clientes.map(cliente=>{return(<div key={cliente.id}><Cliente cliente={cliente}/></div>)})
    
    return (
        <Container maxWidth="sm">
            {/*{listaClientes}*/}
            {clientes.map(cliente=>(<div key={cliente.id}><Cliente cliente={cliente}/></div>))}

        </Container>
    )
}