import React from 'react';
import {Admin} from './pages/Admin'
import {Home} from './pages/Home'
import {Ventas} from './pages/Ventas'
import {EditProduct} from './pages/EditProduct'
import {AddProduct} from './pages/AddProduct'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginPage } from './components/Login';
import { Cart } from './pages/Cart';
import { AdminProductos } from './pages/AdminProductos';
import { AdminClientes } from './pages/AdminClientes';
import { AddClient } from './pages/AddClient';
import { EditClient } from './pages/EditClient';
import { DataCliente } from './components/DataCliente';

const App = () => {
  return (<BrowserRouter>
  <Routes>
    <Route index element={<Home/>}/>
    <Route path='/login' element={<LoginPage/>}/>
    <Route path='/admin' element={<Admin/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/clientinfo' element={<DataCliente/>}/>
    
    
    <Route path='/admin/sells' element={<Ventas/>}/>
    
    <Route path='/admin/products' element={<AdminProductos/>}/>
    <Route path='/admin/add-product' element={<AddProduct/>}/>
    <Route path='/admin/edit-product/:id' element={<EditProduct/>}/>
  
    <Route path='/admin/clients' element={<AdminClientes/>}/>
    <Route path='/admin/add-client' element={<AddClient/>}/>
    <Route path='/admin/edit-client/:id' element={<EditClient/>}/>
    
  </Routes>
  </BrowserRouter>)
}

export default App;
