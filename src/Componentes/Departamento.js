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
    <div>
      <div class="d-flex flex-wrap justify-content-between align-items-center pt-1 border-bottom pb-4 mb-4">
        <h2 class="h3 mb-0 pt-3 me-3">{props.NombreDpto}</h2>
        <div class="pt-3"><a class="btn btn-outline-accent btn-sm" href="grocery-catalog.html">More products<i class="ci-arrow-right ms-1 me-n1"></i></a></div>
     </div>
      {ListProducts.length > 0 ? <GridProducts ListaProductos = {ListProducts} /> : <div class="spinner-border text-primary" role="status">
  <span class="sr-only"></span>
</div>}
  </div>
  );
}