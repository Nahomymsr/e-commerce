import { useState } from 'react';
import '../Estilos/Card.css'



export function Card(props){

  
    const[producto,SetPrice] = useState({category: props.producto.category,
        id: props.producto.id,
        price: props.producto.price,
        cantidad: 0})


        const Sumar = () => {

            SetPrice((producto) => {
                return {...producto, cantidad: producto.cantidad + 1}
            })
        }

        const Restar = () => {

            if(producto.cantidad == 0){
                SetPrice((producto) => {
                    return {...producto, cantidad: 0 }
                })
            }
            else{
            
                SetPrice((producto) => {
                    return {...producto, cantidad: producto.cantidad - 1}
                })
            }

        }
    

 return(
 <div className='Card col-2 d-flex' style={{flexDirection: 'column', justifyContent: 'space-around'}}>
    <div className='d-flex justify-content-center mt-3'>
        <div style={{height:'150px', width:'170px', backgroundColor:'pink'}}>
            <img src={props.producto.image} style={{height:'100%', width:'100%'}}></img>
        </div>
    </div>

    <div className='d-flex justify-content-center pt-3'>
        <h5 className='Pfont-size trucar-text'>{props.producto.title}</h5>
    </div>

    <div className='d-flex justify-content-center pt-3'>
         <button type="button" class="btn btn-primary size-button bg-secondary" onClick={() => Restar()} style={{border:'none'}}>-</button>
         <input class="form-control mx-3 w-25 text-center" type="text" value={producto.cantidad} aria-label="readonly input example" ></input>
         <button type="button " class="btn btn-primary size-button" onClick={() => Sumar()} style={{border:'none'}} >+</button>
    </div>

    <div className='d-flex justify-content-center'>
        <h6 >{props.producto.price} usd</h6>
    </div>
</div>
 );
}