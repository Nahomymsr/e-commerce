import { useEffect, useState } from "react"
import { Card } from "./Card"

export function GridProducts(props){
  
   
    const [ListaProd,SetListaProd]= useState([])
    

    useEffect(()=>{
        SetListaProd(props.ListaProductos)
        
    },[])
    

    return(
        <div className="row justify-content-center" style={{gridColumnGap:'10px', gridRowGap:'10px'}}>
           {ListaProd.length > 0 && ListaProd.map((prod)=> <Card producto={prod}/>) }
        </div>
    )

}