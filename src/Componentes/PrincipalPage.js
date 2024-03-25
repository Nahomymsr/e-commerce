import { useState, useEffect } from "react";
import { Departamento } from "./Departamento";

export function PrincipalPage({cart, setCart}){

    const[Departamentos, SetDepartamentos] = useState([])

  useEffect(()=>{
    fetch("https://fakestoreapi.com/products/categories").then((Resl) => Resl.json() ).then((value)=>{
    const ListaDepartamento = value;
    SetDepartamentos(ListaDepartamento)
    })

  },[])

    return(
        <div>
                <div className="px-3 " >
                {Departamentos.map((Dep) => <Departamento  cart={cart} setCart={setCart}  NombreDpto={Dep}/>)}
                </div>
        </div>
    )
}