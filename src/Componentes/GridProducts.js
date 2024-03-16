import { useEffect, useState } from "react"
import { Card } from "./Card"

export function GridProducts(props){
  
   
    const [ListaProd,SetListaProd]= useState([])
    console.log(ListaProd)

    useEffect(()=>{
        SetListaProd(props.ListaProductos)
        console.log(ListaProd)
    },[])
    

    return(
        <div className="row justify-content-center" style={{gridColumnGap:'10px', gridRowGap:'10px'}}>
           {ListaProd.length > 0 && ListaProd.map((prod)=> <Card producto={prod}/>) }
        </div>
    )

}