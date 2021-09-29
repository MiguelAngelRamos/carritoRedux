import React, {useContext} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { agregarCarritoAction } from '../actions/productoActions';
import { CarritoContext } from '../context/CarritoContext';


const CardProducto = ({ producto }) => {
  //Context
  const { carritoCompra, setCarritoCompra } = useContext(CarritoContext);
  const dispatch = useDispatch();
  const carrito = useSelector( state => state.productos.carrito);
  const { title, image, precio } = producto;

  const agregarCarrito = (producto) => {
    // El método hasOwnProperty() devuelve un booleano indicando si el objeto tiene la propiedad
    carrito.hasOwnProperty(producto.id) ? producto.cantidad = carrito[producto.id].cantidad + 1: producto.cantidad = 1;

    dispatch(agregarCarritoAction(producto));
    // setCarritoCompra( c => c + 1);
    setCarritoCompra( carritoCompra + 1);
    
  }
  return (
    <div className="card" style={{width: "18rem"}}>
      <img src={image} className="card-img-top" alt="" />
      <div className ="card-body">
      <h5 className ="card-title">{ title }</h5>
      <span className="font-weight-bold text-center">${ Intl.NumberFormat().format(precio) }</span>
      </div>
      <button className ="btn btn-success btn-block" onClick={()=> agregarCarrito(producto)}>Agregar al carrito</button>
    </div>
    
  )
}

export default CardProducto
