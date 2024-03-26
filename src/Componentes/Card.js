import { useEffect, useState } from 'react';
import '../Estilos/Card.css'


export function Card({producto,cart,setCart}){

        const [product,setProducto] = useState(producto)

        useEffect(()=>{
            console.log("Renderizo producto")
        },[])


        function Restar()
        {
            if(product.cantidad == 1 || product.cantidad ==0)
            {
                const ActProd = {...product, cantidad:0}

                setProducto(ActProd)

                const NewCart = cart.filter((prod) => prod.id !== product.id)

                setCart(NewCart)
            }
            else
            {
                const ActProd = {...product,cantidad: product.cantidad - 1}
                setProducto(ActProd)

                const CarritoAct = cart.map((prod) => {
                    if(prod.id == product.id)
                    {
                        return (ActProd)
                    }
                    else
                    {
                     return (prod)
                    }
                })

                setCart(CarritoAct)

            }
            
        }


        async function Sumar()
        {
            if(product.cantidad == 0)
            {
                const ActProd = {...product,cantidad:1}
                setProducto(ActProd)

                setCart([...cart,ActProd])
               
               
            }
            else
            {
                const ActProd = {...product,cantidad: product.cantidad + 1}
                setProducto(ActProd)

                const CarritoAct = cart.map((prod) => {
                    if(prod.id == product.id)
                    {
                        return (ActProd)
                    }
                    else
                    {
                     return (prod)
                    }
                })

                setCart(CarritoAct)

            }
            
        }



 return(
 <div className='Card col-2 d-flex' style={{flexDirection: 'column', justifyContent: 'space-around'}}>
    <div className='d-flex justify-content-center mt-3'>
        <div style={{height:'150px', width:'170px', backgroundColor:'pink'}}>
            <img src={product.image} style={{height:'100%', width:'100%'}}></img>
        </div>
    </div>

    <div className='d-flex justify-content-center pt-3'>
        <h5 className='Pfont-size trucar-text'>{product.title}</h5>
    </div>

    <div className='d-flex justify-content-center pt-3'>
         <button type="button" class="btn btn-primary size-button bg-secondary" onClick={Restar} style={{border:'none'}}>-</button>
         <input class="form-control mx-3 w-25 text-center" type="text" value={product.cantidad} aria-label="readonly input example" ></input>
         <button type="button " class="btn btn-primary size-button" onClick={Sumar} style={{border:'none'}} >+</button>
    </div>

    <div className='d-flex justify-content-center'>
        <h6 >{product.price} usd</h6>
    </div>
</div>
 );
}