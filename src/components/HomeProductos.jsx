import { useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { obtenerProductosAction } from '../actions/productoActions';

const HomeProductos = () => {
  const dispatch = useDispatch();

  useEffect(()=> {
    // consultar la API
    const cargarProductos = () => dispatch(obtenerProductosAction());
    cargarProductos(); // que se ejecute siempre uan vez renderizado el componente
  },[])
  return (
    <div>
      <h1>Home Productos</h1>
    </div>
  )
}

export default HomeProductos
