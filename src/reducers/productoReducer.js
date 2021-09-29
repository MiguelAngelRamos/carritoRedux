import {
  COMENZAR_DESCARGA_PRODUCTOS,
  DESCARGA_PRODUCTOS_EXITO,
  DESCARGA_PRODUCTOS_ERROR,
  AGREGAR_PRODUCTO_CARRITO,
  AUMENTAR_CANTIDAD_CARRITO,
  DISMINUIR_CANTIDAD_CARRITO
} from '../types';

// el state de la aplicacion
const initialState = {
  productos: [],
  loading: false,
  error: null,
  carrito: {},
  carritoArray: []
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
    case AGREGAR_PRODUCTO_CARRITO: {
      state.carrito[action.payload.id] = action.payload;
      // state.carritoArray.push(action?.payload);
      state.carritoArray[action.payload.id] = action.payload;
      return {
        ...state
      }
    }
    case AUMENTAR_CANTIDAD_CARRITO: {
      // id
      state.carrito[action.payload].cantidad = state.carrito[action.payload].cantidad + 1;
      return {
        ...state
      }
    }
  
    default:
      return state; // por defecto siempre debe retornar el state

  }

}