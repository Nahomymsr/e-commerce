import { useEffect } from "react"
import imagen from "../assets/imagenes/logoshop.png"
import '../Estilos/NavBarP.css'
import { Link } from "react-router-dom"

export function NavBarP ({cart,setCart}){

   

    useEffect(()=>{
        setCart(cart)
        console.log(cart)

    },[cart])

    return(
        <header className="shadow-sm">
              
            <nav class="navbar bg-white px-4 shadow py-0 " style={{position:'fixed', zIndex:'2000' , width:'100vw'}}>
                <div class="container-fluid">
                    <div>
                    <Link to="/" class="navbar-brand"> <img src={imagen} style={{height:'70px', width:'150px'}}></img></Link>
                    </div>
                    
                    <div  id="cont-search" className="d-flex justify-content-end justify-content-lg-between ">
                    <div className="w-lg-50 d-flex align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="49" height="16" fill="currentColor" style={{zIndex:"500", top:"25px"}} class="bi bi-search d-flex d-lg-none  ms-2" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                        </svg>
                    <form class="d-none d-lg-flex" role="search">
                    <svg xmlns="http://www.w3.org/2000/svg" width="49" height="16" fill="currentColor" style={{zIndex:"500", top:"25px"}} class="bi bi-search position-fixed ms-2" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                    </svg>
                    <input class="form-control me-2 position-relative w-100 ps-5" type="search" placeholder="Search" aria-label="Search"></input>
                    </form>
                    </div>

                    
                        <Link to="/Register" className="d-flex" style={{textDecoration:'none'}}>
                       
                        <div className="d-flex align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" style={{color:'#4b566b' }} width="40" height="30" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                        </svg>
                        </div>
                        
                        <div class="navbar-tool-text ms-n3 d-none d-lg-grid" style={{color:'#4b566b'}}>
                            <small>Hola, registrate</small>
                        Mi cuenta</div>
                        
                        </Link>

                        <div id="Carrito" className="d-flex">

                        <a className="d-flex align-items-center me-2" style={{borderRadius:'36px', backgroundColor:'whitesmoke'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="25" fill="#4b566b'" class="bi bi-cart3" viewBox="0 0 15 20">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                        </svg>
                        </a>

                        <a class="navbar-tool-text d-none d-lg-grid" style={{textDecoration:'none', color:'#4b566b'}}><small>My Cart</small>$25.00</a>
                       
                        <div id="Dropdown-Carrito" className="position-absolute" >

                        


                            <div style={{height:"25rem", overflowY:"auto",padding:"1rem"}}>
                                    {cart.map((prod) =><div class="d-flex align-items-center"><a class="d-block" href="grocery-single.html"><img src={prod.image} width="64" alt="Product"/></a>
                                <div class="ps-2">
                                <h6 class="widget-product-title"><a style={{textDecoration:"none",color:"black"}}>{prod.title}</a></h6>
                                <div class="widget-product-meta"><span class="text-accent me-2">{prod.price}<small>.00</small></span><span class="text-muted">{"x " + prod.cantidad}</span></div>
                                </div>
                       </div>)}  
                            </div>
                            
                            <div className="d-flex justify-content-center aling-items-center">
                                <Link to="/Checkout">
                                        <button type="button" class="btn btn-primary m-3">Ver carrito</button>
                                </Link>
                                
                            </div>

                        </div>
                        </div>

                        
                        </div>
                    
                    
                    
                   </div>


            </nav>
        </header>
    )
}