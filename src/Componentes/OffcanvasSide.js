import { useState,useEffect } from "react";
import '../Estilos/OffcanvasSide.css'

export function OffcanvasSide(){

    const[Departamentos, SetDepartamentos] = useState([])

    useEffect(()=>{
      fetch("https://fakestoreapi.com/products/categories").then((Resl) => Resl.json() ).then((value)=>{
      const ListaDepartamento = value;
      SetDepartamentos(ListaDepartamento)
      })
  
    },[])

    return(
        <aside>
        <div class="offcanvas offcanvas-expand offcanvas-start" tabindex="-1" id="offcanvas" aria-labelledby="offcanvasLabel" style={{paddingTop:'5.5rem', border:'none'}}>
            <div class="offcanvas-body">
                {Departamentos.length > 0 ? Departamentos.map((Dep)=>
                <a  href={"#"+ Dep} className="div-departamento">
                    {Dep.toUpperCase()}
                </a>
                ): <div> No entro</div>}
            </div>
        </div>
    </aside>
    )
}