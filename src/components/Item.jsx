import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { aumentarCantidadAction } from '../actions/productoActions';

const Item = ({item}) => {
  const [ refresh, setRefresh] = useState(0);

  const dispatch = useDispatch();

  const aumentar = id => {
    setRefresh(refresh + 1);
    const aumentarCantidad = () => dispatch(aumentarCantidadAction(id));
    aumentarCantidad();
  }

  // disminuir



  return (
    <>
      <tr>
        <th scope="row"> {item.id} </th>
        <td> {item.title } </td>
        <td> { item.cantidad } </td>
        <td>
          <button className="btn btn-success btn-sm" onClick={()=> aumentar(item.id)}>+</button>
          <button className="btn btn-danger btn-sm">-</button>
        </td>
        <td>${Intl.NumberFormat().format(item.precio * item.cantidad )}</td>
      </tr>
    </>
  )
}

export default Item
