import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Layout } from './Componentes/Layout';
import { PrincipalPage } from './Componentes/PrincipalPage';
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import { Checkout } from './pages/Checkout';
import { Register } from './pages/Register';



function App() {

 return(
  <BrowserRouter>
      
      <Layout/>

      <Routes>
          <Route path="/" element={<section className="section bg-light" >
          <PrincipalPage/></section>}/>

          <Route path="/Checkout" element={<section className="section bg-light" >
          <Checkout/></section>}/>

          <Route path="/Register" element={<section className="section bg-light" >
          <Register/></section>}/>
      </Routes>

  </BrowserRouter>
 
 )
 
}



export default App;
