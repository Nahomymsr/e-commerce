import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Layout } from './Componentes/Layout';
import { PrincipalPage } from './Componentes/PrincipalPage';



function App() {

 return(
  <div>
  <Layout/>
  <section className="section bg-light" >
    <PrincipalPage/>
  </section>
  </div>
 
 )
 
}



export default App;
