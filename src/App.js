import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Layout } from './Componentes/Layout';
import { PrincipalPage } from './Componentes/PrincipalPage';
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import { Checkout } from './pages/Checkout';
import { Register } from './pages/Register';
import { useState } from 'react';



function App() {

    const[cart,setCart]= useState([])

 return(
  <BrowserRouter>
      
      <Layout  cart={cart} setCart={setCart}/>

      <Routes>
          <Route path="/" element={<section className="section bg-light" >
          <PrincipalPage cart={cart} setCart={setCart}/></section>}/>

          <Route path="/Checkout" element={<section className="section bg-light" >
          <Checkout  cart={cart} setCart={setCart}/></section>}/>

          <Route path="/Register" element={<section className="section bg-light" >
          <Register/></section>}/>
      </Routes>

  </BrowserRouter>
 
 )
 
}



export default App;
