import '../Estilos/Card.css'

export function Card(props){

 return(
 <div className='Card col-2'>
    <div className='d-flex justify-content-center mt-3'>
        <div style={{height:'150px', width:'170px', backgroundColor:'pink'}}>
            <img src={props.producto.image} style={{height:'100%', width:'100%'}}></img>
        </div>
    </div>

    <div>
        <h5>{props.producto.title}</h5>
        <h6>{props.producto.price} usd</h6>
    </div>
</div>
 );
}