import React from "react"
import {Bar} from '../components/Bar';
import '../App.css';
import { NuevoElemento } from "../components/NuevoElemento";
import { ListaClientes } from "../components/ListaClientes";

export const AdminClientes = () =>{
    return (
        <>
        <NuevoElemento enlace="/admin/add-client" titulo="agregar cliente"/>
        <Bar/>
        <ListaClientes/>
        </>
    )
}
