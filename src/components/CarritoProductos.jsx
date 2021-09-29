import React from 'react'
import { useSelector } from 'react-redux';
import Item from './Item';

const CarritoProductos = () => {
  // const carrito = useSelector( state => state.productos.carrito);
  const carritoArray = useSelector(state => state.productos.carritoArray);
  return (
    <>
        <h2 className="text-center mt-5">Carrito de compras</h2>
        <div className="container mt-5">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Item</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Acción</th>
                <th scope="col">Total</th>
              </tr>
            </thead>
            <tbody>
              {
                carritoArray.map(i => (
                      <Item key={i.id} item={i} />
                ))
              }
                 
            </tbody>
            <tfoot>
              <tr>Totales</tr>
            </tfoot>
          </table>
        </div>
    </>
  )
}

export default CarritoProductos
