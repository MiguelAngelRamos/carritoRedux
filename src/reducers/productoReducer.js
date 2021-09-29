import {
  COMENZAR_DESCARGA_PRODUCTOS,
  DESCARGA_PRODUCTOS_EXITO,
  DESCARGA_PRODUCTOS_ERROR,
  AGREGAR_PRODUCTO_CARRITO,
  AGREGAR_CANTIDAD
} from '../types';

// el state de la aplicacion
const initialState = {
  productos: [],
  loading: false,
  error: null,
  carrito: {}
}

export default function productosReducer(state=initialState, action) {

  switch(action.type) {
    case COMENZAR_DESCARGA_PRODUCTOS: {
      return {
        ...state,
        loading: action.payload
      }
    }
    case DESCARGA_PRODUCTOS_EXITO: {
      return {
        ...state,
        loading: false,
        productos: action.payload
      }
    }
  
    default:
      return state; // por defecto siempre debe retornar el state

  }

}