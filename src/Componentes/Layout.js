
import { NavBarP } from "./NavBarP"
import OffcanvasSide from "./OffcanvasSide"

export function Layout(props){

    return(
        <div>
            <NavBarP cart={props.cart} setCart={props.setCart}/>
            <OffcanvasSide/>
        </div>
    )
}