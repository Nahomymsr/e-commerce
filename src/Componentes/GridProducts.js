import { useEffect, useReducer, useState } from "react"
import { Card } from "./Card"
import { DptoReducer } from "../reducers/DptoReducer"

export function GridProducts({ListaProductos, cart, setCart}){
  
   
    let ListaAct =[]
    const [ListaProdXDpto, SetListProd] = useState([])
 
    
    useEffect(()=>{

        console.log("Se renderizo")

         ListaProductos.map((producto) => {ListaAct.push({category: producto.category,
            title:producto.title,
            id: producto.id,
            price: producto.price,
            image:producto.image,
            cantidad: Number(0)})
        })

        SetListProd(ListaAct)
        
    },[])


   

    return(
        <div className="row justify-content-center" style={{gridColumnGap:'10px', gridRowGap:'10px'}}>
           {ListaProdXDpto.length > 0 && ListaProdXDpto.map((prod)=> <Card producto={prod}  cart={cart} setCart={setCart} />) }
        </div>
    )

}