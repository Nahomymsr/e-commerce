
import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Departamento } from './Componentes/Departamento';



function App() {

  const[Departamentos, SetDepartamentos] = useState([])

  useEffect(()=>{
    fetch("https://fakestoreapi.com/products/categories").then((Resl) => Resl.json() ).then((value)=>{
    const ListaDepartamento = value;
    SetDepartamentos(ListaDepartamento)
    console.log(Departamento)
    })

  },[])

  return (
    <div className="App mx-5" style={{backgroundColor:'whitesmoke'}}>
      {Departamentos.map((Dep) => <Departamento  NombreDpto={Dep}/>)}
    </div>
  );
}



export default App;
