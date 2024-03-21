import { useEffect, useState } from "react";
import { GridProducts } from "./GridProducts";


export function Departamento(props)
{
    const [ListProducts,SetListProducts] = useState([])
    
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/category/'+ props.NombreDpto).then(value => value.json()).then((value)=> {
        SetListProducts(value)
        })
    }
  
    ,[])

    return(
    <div id={props.NombreDpto}>
      <div class="d-flex flex-wrap justify-content-between align-items-center pt-1 border-bottom pb-4 mb-4">
        <h2 class="h3 mb-0 pt-3 me-3">{props.NombreDpto}</h2>
        
     </div>
      {ListProducts.length > 0 ? <GridProducts ListaProductos = {ListProducts} /> :<div class="spinner-border text-primary" role="status"><span class="sr-only"></span>
</div>}
  </div>
  );
}
