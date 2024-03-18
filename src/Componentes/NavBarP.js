import imagen from "../assets/imagenes/logoshop.png"

export function NavBarP (){
    return(
        <header className="shadow-sm">
            <nav class="navbar bg-white px-4 shadow " style={{position:'fixed', zIndex:'2000' , width:'100vw'}}>
                <div class="container-fluid">
                    <a class="navbar-brand"> <img src={imagen} style={{height:'70px', width:'150px'}}></img></a>
                    <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                    <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </header>
    )
}