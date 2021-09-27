import { Link, NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      VueMarket
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to={"/"}>Home</NavLink>
          </li>
        </ul>
        {/* <!-- Icono del carrito --> */}
        <Link to={"/carrito"} className="carrito-container d-flex">
          {/* <!-- <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button> --> */}
          <div className="carrito-icon">
            {/* <!-- Icon --> */}
            <i className="fas fa-cart-plus"></i>
          </div>
          <div className="counter">
            <div className="counter-number">
              {/* {{ Object.keys(carrito).length }} */}
              0
            </div>
          </div>
        </Link>
        {/* <!-- /Icono del carrito --> */}
  
      </div>
    </div>
  </nav>
  )
}

export default Navbar
