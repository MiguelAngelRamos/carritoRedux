import {
  COMENZAR_DESCARGA_PRODUCTOS,
  DESCARGA_PRODUCTOS_EXITO,
  DESCARGA_PRODUCTOS_ERROR,
  AGREGAR_PRODUCTO_CARRITO,
  AGREGAR_CANTIDAD,
  AUMENTAR_CANTIDAD_CARRITO
} from '../types';

import clienteAxios from '../config/axios';

// Funcion que descarga los productos de la fake API
export function obtenerProductosAction() {
  return async (dispatch) => {
    dispatch(descargarProductos()); // COMENZAR LA DESCARGA DE PRODUCTOS, LOADING VA ESTAR TRUE
    try {
      const respuesta  = await clienteAxios.get('/productos');
      console.log(respuesta);
      dispatch(descargaProductosExitosa(respuesta.data))
    } catch (error) {
      console.log(error);
    }
    
  }
}

const descargarProductos = () => ({
  type: COMENZAR_DESCARGA_PRODUCTOS,
  payload: true
});

const descargaProductosExitosa = (productos) => ({
  type: DESCARGA_PRODUCTOS_EXITO,
  payload: productos
});

// Añadir al carrito
export function agregarCarritoAction(producto) {
  return (dispatch) => {
    dispatch(agregarProductoCarrito(producto));
  }
}

const agregarProductoCarrito = (producto) => ({
  type: AGREGAR_PRODUCTO_CARRITO,
  payload: producto
})


export function aumentarCantidadAction(idProducto) {
  return(dispatch) => {
    dispatch(aumentarCantidadCarrito(idProducto))
  }
}

const aumentarCantidadCarrito = id => ({
  type: AUMENTAR_CANTIDAD_CARRITO,
  payload: id
})