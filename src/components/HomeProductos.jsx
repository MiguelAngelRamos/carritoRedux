import { useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { obtenerProductosAction } from '../actions/productoActions';
import CardProducto from './CardProducto';

const HomeProductos = () => {
  const dispatch = useDispatch();

  useEffect(()=> {
    // consultar la API
    const cargarProductos = () => dispatch(obtenerProductosAction());
    cargarProductos(); // que se ejecute siempre uan vez renderizado el componente
  },[]);

  const productos = useSelector(state => state.productos.productos)
 
  return (
    <>
      <h1 className="text-center">Home Productos</h1>
      <div className="container mt-5">
        <div className="row d-flex justify-content-between">
            {
              productos.lenght === 0 ? 'No hay productos...' : (
                productos.map( p => (
                  <CardProducto key={p.id} producto={p}/>
                ))
              )
            }
        </div>
      </div>
    </>
  )
}

export default HomeProductos
